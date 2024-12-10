import { Router } from "express";
import { PromotorController } from "../controllers/promotor.controller";

export class PromotorRouter {
  private promotorController: PromotorController;
  private router: Router;

  constructor() {
    this.promotorController = new PromotorController();
    this.router = Router();
  }

  private initializeRoutes() {
    this.router.post("/promotor/create", this.promotorController.createPromotor);
  }
}
