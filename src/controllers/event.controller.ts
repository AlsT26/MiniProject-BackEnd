import { EventCategories } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../prisma";

export class EventController {
  async getEventsByCategory(req: Request, res: Response) {
    try {
      const { category } = req.params;

      const events = await prisma.event.findMany({
        where: { category: category as EventCategories },
      });

      const totalEvents = events.length;

      res.status(200).send({ totalEvents, events });
    } catch (error) {
      console.log(error);
      res.status(404).send({ message: error });
    }
  }

  async getEventBySlug(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const event = await prisma.event.findFirst({
        where: { slug: slug },
        select: {
          title: true,
          description: true,
          category: true,
          location: true,
          venue: true,
          date: true,
          time: true,
          promotor: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      });
      res.status(200).send({ event });
    } catch (error) {
      console.log(error);
      res.status(404).send({ message: error });
    }
  }
}
