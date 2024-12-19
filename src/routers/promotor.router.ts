import { Router } from "express";
import { PromotorController } from "../controllers/promotor.controller";
import { uploader } from "../services/uploader";

export class PromotorRouter {
  private promotorController: PromotorController;
  private router: Router;

  constructor() {
    this.promotorController = new PromotorController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.promotorController.getPromotors);
    this.router.post("/", this.promotorController.createPromotor);
    this.router.get("/:id", this.promotorController.getPromotorById);
    this.router.post("/:promotorId/event", uploader("memoryStorage", "event-").single("thumbnail"), this.promotorController.createEvent);
  }

  getRouter(): Router {
    return this.router;
  }
}
