"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotorController = void 0;
const client_1 = require("../../prisma/generated/client");
const slugMaker_1 = require("../helpers/slugMaker");
const cloudinary_1 = require("../services/cloudinary");
const prisma = new client_1.PrismaClient();
class PromotorController {
    getPromotors(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { search, page = 1, limit = 5 } = req.query;
                const filter = {};
                if (search) {
                    filter.OR = [{ name: { contains: search, mode: "insensitive" } }];
                }
                const countPromotors = yield prisma.promotor.aggregate({ _count: { _all: true } });
                const total_page = Math.ceil(countPromotors._count._all / +limit);
                const promotors = yield prisma.promotor.findMany({
                    where: filter,
                    orderBy: { id: "asc" },
                    take: +limit,
                    skip: +limit * (+page - 1),
                });
                res.status(200).send({ countPromotors, total_page, page, promotors });
            }
            catch (error) {
                console.error(error);
                res.status(400).send({ message: error });
            }
        });
    }
    getPromotorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const promotor = yield prisma.promotor.findUnique({
                    where: { id: parseInt(id, 10) },
                });
                if (!promotor) {
                    return res.status(400).send({ message: `Promotor by id : ${id} is not found` });
                }
                res.status(200).send({ promotor });
            }
            catch (error) {
                console.log(error);
                res.status(400).send({ message: error });
            }
        });
    }
    createPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.promotor.create({ data: req.body });
                res.status(201).send({ message: "A new promotor has been created" });
            }
            catch (error) {
                console.error(error);
                res.status(400).send({ message: error });
            }
        });
    }
    createEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { promotorId } = req.params;
                // console.log(req.params.promotorId);
                const { title, description, category, location, venue, dateTime } = req.body;
                const promotor = yield prisma.promotor.findUnique({
                    where: { id: +promotorId },
                });
                const slug = (0, slugMaker_1.createSlug)(title);
                if (!promotor) {
                    return res.status(404).send({ message: "Promotor not found" });
                }
                if (!req.file)
                    throw { message: "thumbnail empty" };
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "TicketHub");
                const newEvent = yield prisma.event.create({
                    data: {
                        title,
                        description,
                        category,
                        location,
                        venue,
                        slug,
                        thumbnail: secure_url,
                        dateTime,
                        promotorId: +promotorId,
                    },
                });
                res.status(201).send({ message: `New event by promotor with id ${promotor.id} has been created successfully`, newEvent });
            }
            catch (error) {
                console.error(error);
                res.status(400).send({ message: error });
            }
        });
    }
}
exports.PromotorController = PromotorController;
