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
exports.UserController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
// import { cloudinaryUpload } from "../services/cloudinary";
class UserController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.user);
                console.log(req.user);
                const { search, page = 1 } = req.query;
                const { user } = req.body;
                console.log("user", user);
                const limit = 3;
                const filter = {};
                if (search) {
                    filter.OR = [{ username: { contains: search, mode: "insensitive" } }, { email: { contains: search, mode: "insensitive" } }];
                }
                const countUser = yield prisma_1.default.user.aggregate({ _count: { _all: true } });
                const total_page = Math.ceil(+countUser._count._all / +limit);
                const users = yield prisma_1.default.user.findMany({
                    where: filter,
                    orderBy: { id: "asc" },
                    take: limit,
                    skip: limit * (+page - 1),
                });
                res.status(200).send({ total_page, page, users });
            }
            catch (error) {
                console.log(error);
                res.status(400).send({ error });
            }
        });
    }
    getUserID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const user = yield prisma_1.default.user.findUnique({ where: { id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id } });
                res.status(200).send({ user });
            }
            catch (error) {
                res.status(400).send({ error });
            }
        });
    }
    DeleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield prisma_1.default.user.findUnique({
                    where: { id: +id },
                });
                if (!user) {
                    res.status(404).json({ message: "User not found" });
                }
                yield prisma_1.default.user.delete({
                    where: { id: +id },
                });
                res.status(200).json({ message: "User deleted successfully" });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    EditUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.user.update({ data: req.body, where: { id: +id } });
                res.status(200).send("success");
            }
            catch (error) {
                console.log(error);
                res.status(400).send({ error });
            }
        });
    }
    EditAvatar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // try{
            //   if(!req.file) throw {message:"file empty"}
            //   const link = `http://localhost:8000/api/public/avatar/${req.file.filename}`
            //   await prisma.user.update({
            //     data:{avatar:link},
            //     where:{id:req.user?.id}
            //   })
            //   res.status(200).send({message:"avatar edited"})
            // }catch(error){
            //   res.status(400).send(error)
            // }
        });
    }
    EditCloudinary(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // try{
            //   if(!req.file) throw {message:"file empty"}
            //   const {secure_url} = await cloudinaryUpload(req.file,"avatar")
            //   await prisma.user.update({
            //     data:{avatar:secure_url},
            //     where:{id:req.user?.id}
            //   })
            //   res.status(200).send({message:"avatar edited"})
            // }catch(error){
            //   res.status(400).send(error)
            // }
        });
    }
    coupon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const coupon = yield prisma_1.default.user_Coupon.findMany();
                res.status(200).send({ coupon });
            }
            catch (error) {
                res.status(400).send({ message: error });
            }
        });
    }
    point(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const point = yield prisma_1.default.user_Point.findMany();
                res.status(200).send({ point });
            }
            catch (error) {
                res.status(400).send({ message: error });
            }
        });
    }
    addReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, eventId } = req.params;
                const { desc, rating } = req.body;
                if (rating < 1 || rating > 5) {
                    return res.status(400).send({ message: "Rating must be between 1 and 5" });
                }
                const existingReview = yield prisma_1.default.review.findFirst({
                    where: {
                        userId: +id,
                        eventId: +eventId,
                    },
                });
                if (existingReview) {
                    return res.status(400).send({
                        message: "You have already submitted a review for this event",
                    });
                }
                const newReview = yield prisma_1.default.review.create({
                    data: {
                        desc,
                        rating,
                        user: { connect: { id: +id } },
                        event: { connect: { id: +eventId } },
                    },
                });
                res.status(201).send({ message: "New review have been created", newReview });
            }
            catch (error) {
                console.log(error);
                res.status(500).send({ message: "error creating review:", error });
            }
        });
    }
}
exports.UserController = UserController;
