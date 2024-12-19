
import { EventCategories, Prisma } from "../../prisma/generated/client";
import { Request, Response } from "express";
import prisma from "../prisma";

export class EventController {
  async getEvents(req: Request, res: Response) {
    try {
      const { search, page = 1, limit = 4 } = req.query;
      const filter: Prisma.EventWhereInput = {};
      if (search) {
        filter.OR = [{ title: { contains: search as string, mode: "insensitive" } }];
      }
      const countEvents = await prisma.event.aggregate({ _count: { _all: true } });
      const total_page = Math.ceil(countEvents._count._all / +limit);
      const events = await prisma.event.findMany({
        include: { promotor: true },
        where: filter,
        orderBy: { id: "asc" },
        take: +limit,
        skip: +limit * (+page - 1),
      });
      res.status(200).send({ countEvents, total_page, page, events });
    } catch (error) {
      console.log(error);
      res.status(404).send({ message: error });
    }
  }

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
          thumbnail: true,
          date: true,
          time: true,
          tickets: {
            select: {
              id: true,
              title: true,
              desc: true,
              available: true,
              totalSeats: true,
            },
          },
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

  async setTicket(req: Request, res: Response): Promise<any> {
    try {
      const { slug } = req.params;
      const { totalSeats, title, desc, price } = req.body;

      const event = await prisma.event.findFirst({
        where: { slug: slug },
      });
      console.log(slug);
      const createTickets = await prisma.ticket.create({
        data: {
          title,
          desc,
          price,
          totalSeats,
          available: totalSeats,
          eventId: event?.id as number,
        },
      });

      res.status(200).send({ message: `${totalSeats} ${title} tickets successfully created for event: ${event?.title}`, createTickets: totalSeats });
    } catch (error) {
      console.log(error);
      res.status(404).send({ message: error });
    }
  }

  //   async getTicketsBySlug(req: Request, res: Response){
  //     try {

  //     } catch (error) {
  //         console.log(error);
  //         res.status(404).send({ message: error})
  //     }
  //   }
}
