import { Router } from "express";
import { EventController } from "../controllers/event.controller";

export class EventRouter {
  private eventController: EventController;
  private router: Router;

  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/:category", this.eventController.getEventsByCategory);
    this.router.get("/:slug", this.eventController.getEventBySlug);
  }

  getRouter(): Router {
    return this.router;
  }
}
