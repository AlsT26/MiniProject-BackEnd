"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotorRouter = void 0;
const express_1 = require("express");
const promotor_controller_1 = require("../controllers/promotor.controller");
const uploader_1 = require("../services/uploader");
class PromotorRouter {
    constructor() {
        this.promotorController = new promotor_controller_1.PromotorController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.promotorController.getPromotors);
        this.router.post("/", this.promotorController.createPromotor);
        this.router.get("/:id", this.promotorController.getPromotorById);
        this.router.post("/:promotorId/event", (0, uploader_1.uploader)("memoryStorage", "event-").single("thumbnail"), this.promotorController.createEvent);
    }
    getRouter() {
        return this.router;
    }
}
exports.PromotorRouter = PromotorRouter;
