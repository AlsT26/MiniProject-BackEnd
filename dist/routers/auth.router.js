"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const auth_contoller_1 = require("../controllers/auth.contoller");
class AuthRouter {
    constructor() {
        this.authController = new auth_contoller_1.AuthController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", this.authController.registerUser);
        this.router.get("/promotor", this.authController.show_promotor);
        this.router.post("/promotor", this.authController.RegisterPromotor);
        this.router.get("/", this.authController.test);
        this.router.post("/login", this.authController.loginUser);
        this.router.post("/promotor/login", this.authController.loginPromotor);
        this.router.patch("/verify/:token", this.authController.verifyUser);
        this.router.patch("/promotor/verify/:token", this.authController.verifyPromotor);
        this.router.patch("/promotor/:id", this.authController.EditPromotor);
    }
    getRouter() {
        return this.router;
    }
}
exports.AuthRouter = AuthRouter;
