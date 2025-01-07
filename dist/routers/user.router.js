"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const verify_1 = require("../middlewares/verify");
// import { uploader } from "../services/uploader";
class UserRouter {
    constructor() {
        this.userController = new user_controller_1.UserController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.userController.getUsers);
        this.router.get("/coupon", this.userController.coupon);
        this.router.get("/point", this.userController.point);
        this.router.patch("/avatar", verify_1.verifyToken, 
        // uploader("diskStorage", "avatar-", "/avatar").single("file"),
        this.userController.EditAvatar);
        this.router.get("/profile", verify_1.verifyToken, this.userController.getUserID);
        this.router.patch("/avatar-cloud", verify_1.verifyToken, 
        // uploader("memoryStorage", "avatar").single("file"),
        this.userController.EditCloudinary);
        this.router.patch("/:id", this.userController.EditUser);
        this.router.delete("/:id", this.userController.DeleteUser);
        this.router.post("/:id/:eventId/review", this.userController.addReview);
    }
    getRouter() {
        return this.router;
    }
}
exports.UserRouter = UserRouter;
