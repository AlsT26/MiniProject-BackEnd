import { addMinutes } from "date-fns";
import { PrismaClient } from "../../prisma/generated/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class OrderController {
  async createOrder(req: Request, res: Response): Promise<any> {
    try {
      const { total_price, final_price, tickets } = req.body;
      const userId = req.user?.id;

      // Log userId for debugging
      console.log(req.body);
      console.log("User ID:", userId);

      // Validate userId
      if (!userId) {
        return res.status(401).send({ message: "Unauthorized user" });
      }

      // Validate request body
      if (!total_price || !final_price || !Array.isArray(tickets) || tickets.length === 0) {
        return res.status(400).send({ message: "Invalid input data" });
      }

      // Expiry time for the order
      const expiredAt = addMinutes(new Date(), 10);

      // Start a transaction
      const newOrder = await prisma.$transaction(async (prisma) => {
        // Process each ticket
        for (const ticket of tickets) {
          const { ticketId, qty } = ticket;

          if (!ticketId || qty <= 0) {
            throw new Error("Invalid ticket data");
          }

          // Fetch the ticket
          const existingTicket = await prisma.ticket.findUnique({
            where: { id: ticketId },
          });

          if (!existingTicket || existingTicket.available < qty) {
            throw new Error(`Not enough tickets available for ticket ID ${ticketId}`);
          }

          // Deduct ticket availability
          await prisma.ticket.update({
            where: { id: ticketId },
            data: { available: existingTicket.available - qty },
          });
        }

        // Create the order
        const createdOrder = await prisma.order.create({
          data: {
            total_price,
            final_price,
            // user: {
            //   connect: { id: +userId }, // Connect to existing user
            // },
            userId,
            expiredAt,
            details: {
              create: tickets.map((ticket: any) => ({
                ticketId: ticket.ticketId,
                qty: ticket.qty,
              })),
            },
          },
          include: {
            details: true,
          },
        });

        return createdOrder;
      });

      // Send the response
      return res.status(201).send({
        message: "Order created successfully",
        order: newOrder,
      });
    } catch (error) {
      console.error("Error creating order:", error);
      return res.status(500).send({ message: "Server error", error });
    }
  }

  async updateOrderStatus(req: Request, res: Response) {
    try {
      const { transaction_status, order_id } = req.body;
      if (transaction_status == "settlement") {
        await prisma.order.update({
          data: { status: "Paid" },
          where: { id: +order_id },
        });
      }
      res.status(200).send({ message: "Order Updated" });
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: "Error updating order status", error });
    }
  }
}
