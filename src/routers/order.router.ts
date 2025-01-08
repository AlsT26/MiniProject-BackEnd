import { Router } from "express";
import { OrderController } from "../controllers/order.controller";
import { verifyToken } from "../middlewares/verify";

export class OrderRouter {
  private orderController: OrderController;
  private router: Router;

  constructor() {
    this.orderController = new OrderController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/user-order", verifyToken, this.orderController.getUserOrder);
    this.router.post("/make-order", verifyToken, this.orderController.createOrder);
  }

  getRouter(): Router {
    return this.router;
  }
}
