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
    this.router.get("/", this.eventController.getEvents);
    this.router.get("/show:id", this.eventController.ShowEvents);
    this.router.get("/category/:category", this.eventController.getEventsByCategory);
    this.router.get("/:slug", this.eventController.getEventBySlug);
    this.router.post("/:slug/ticket", this.eventController.setTicket);
    this.router.patch("/edit/:id", this.eventController.EditEvent);

  }

  getRouter(): Router {
    return this.router;
  }
}
