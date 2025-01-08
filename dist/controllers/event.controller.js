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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class EventController {
    ShowEvents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { search, page = 1, limit = 20, promotorId } = req.query;
                const filter = {};
                if (promotorId) {
                    filter.promotorId = Number(promotorId); // Assuming `promotorId` is the correct field in your database
                }
                if (search) {
                    filter.OR = [{ title: { contains: search, mode: "insensitive" } }];
                }
                const countEvents = yield prisma_1.default.event.aggregate({ _count: { _all: true } });
                const total_page = Math.ceil(countEvents._count._all / +limit);
                const events = yield prisma_1.default.event.findMany({
                    include: { promotor: true },
                    where: filter,
                    orderBy: { id: "asc" },
                    take: +limit,
                    skip: +limit * (+page - 1),
                });
                res.status(200).send({ countEvents, total_page, page, events });
            }
            catch (error) {
                console.log(error);
                res.status(404).send({ message: error });
            }
        });
    }
    getEvents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { search, page = 1, limit = 4 } = req.query;
                const filter = {};
                if (search) {
                    filter.OR = [{ title: { contains: search, mode: "insensitive" } }];
                }
                const countEvents = yield prisma_1.default.event.aggregate({ _count: { _all: true } });
                const total_page = Math.ceil(countEvents._count._all / +limit);
                const events = yield prisma_1.default.event.findMany({
                    include: { promotor: true },
                    where: filter,
                    orderBy: { id: "asc" },
                    take: +limit,
                    skip: +limit * (+page - 1),
                });
                res.status(200).send({ countEvents, total_page, page, events });
            }
            catch (error) {
                console.log(error);
                res.status(404).send({ message: error });
            }
        });
    }
    getEventsByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { category } = req.params;
                const events = yield prisma_1.default.event.findMany({
                    where: { category: category },
                });
                const totalEvents = events.length;
                res.status(200).send({ totalEvents, events });
            }
            catch (error) {
                console.log(error);
                res.status(404).send({ message: error });
            }
        });
    }
    getEventBySlug(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { slug } = req.params;
                const event = yield prisma_1.default.event.findFirst({
                    where: { slug: slug },
                    select: {
                        title: true,
                        description: true,
                        category: true,
                        location: true,
                        venue: true,
                        thumbnail: true,
                        dateTime: true,
                        tickets: {
                            select: {
                                id: true,
                                title: true,
                                desc: true,
                                available: true,
                                totalSeats: true,
                                price: true,
                            },
                        },
                        promotor: {
                            select: {
                                name: true,
                                email: true,
                            },
                        },
                    },
                });
                res.status(200).send({ event });
            }
            catch (error) {
                console.log(error);
                res.status(404).send({ message: error });
            }
        });
    }
    EditEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.event.update({ data: req.body, where: { id: +id } });
                res.status(200).send("success");
            }
            catch (error) {
                console.log(error);
                res.status(400).send({ error });
            }
        });
    }
    setTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { slug } = req.params;
                const { totalSeats, title, desc, price } = req.body;
                const event = yield prisma_1.default.event.findFirst({
                    where: { slug: slug },
                });
                console.log(slug);
                const createTickets = yield prisma_1.default.ticket.create({
                    data: {
                        title,
                        desc,
                        price,
                        totalSeats,
                        available: totalSeats,
                        eventId: event === null || event === void 0 ? void 0 : event.id,
                    },
                });
                res.status(200).send({ message: `${totalSeats} ${title} tickets successfully created for event: ${event === null || event === void 0 ? void 0 : event.title}`, createTickets: totalSeats });
            }
            catch (error) {
                console.log(error);
                res.status(404).send({ message: error });
            }
        });
    }
}
exports.EventController = EventController;
