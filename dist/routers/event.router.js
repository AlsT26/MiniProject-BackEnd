"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRouter = void 0;
const express_1 = require("express");
const event_controller_1 = require("../controllers/event.controller");
class EventRouter {
    constructor() {
        this.eventController = new event_controller_1.EventController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.eventController.getEvents);
        this.router.get("/all", this.eventController.ShowEvents);
        this.router.get("/show:id", this.eventController.ShowEvents);
        this.router.get("/category/:category", this.eventController.getEventsByCategory);
        this.router.get("/:slug", this.eventController.getEventBySlug);
        this.router.post("/:slug/ticket", this.eventController.setTicket);
        this.router.patch("/edit/:id", this.eventController.EditEvent);
    }
    getRouter() {
        return this.router;
    }
}
exports.EventRouter = EventRouter;
