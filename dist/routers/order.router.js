"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
const verify_1 = require("../middlewares/verify");
class OrderRouter {
    constructor() {
        this.orderController = new order_controller_1.OrderController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/user-order", verify_1.verifyToken, this.orderController.getUserOrder);
        this.router.post("/make-order", verify_1.verifyToken, this.orderController.createOrder);
    }
    getRouter() {
        return this.router;
    }
}
exports.OrderRouter = OrderRouter;
