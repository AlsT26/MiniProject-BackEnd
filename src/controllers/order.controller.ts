import { Prisma, PrismaClient } from "../../prisma/generated/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
export class OrderController {
  async createOrder(req: Request, res: Response) {
    // try {
    //   const { price } = req.body;
    //   if (!price) {
    //     res.status(400).send({ message: "Invalid final price" });
    //   }
    //   function addMinutes(date: Date, minutes: number) {
    //     date.setMinutes(date.getMinutes() + minutes);
    //     return date;
    //   }
    //   const date = new Date();
    //   const newDate = addMinutes(date, 10);
    //   const newOrder = await prisma.order.create({
    //     data: { final_price: price, userId: req.user?.id, expiredAt: newDate, eventId: req.params.eventId },
    //   });
    // } catch (error) {}
  }
}
