"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const date_fns_1 = require("date-fns");
const client_1 = require("../../prisma/generated/client");
// const midtransClient = require("midtrans-client");
const prisma = new client_1.PrismaClient();
class OrderController {
    createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { total_price, final_price, tickets } = req.body;
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                // Log userId for debugging
                console.log("this is req body", req.body);
                console.log("User ID:", userId);
                // Validate userId
                if (!userId) {
                    return res.status(401).send({ message: "Unauthorized user" });
                }
                console.log("so far so good: creating new order");
                // Validate request body
                // if (!total_price || !final_price || !Array.isArray(tickets) || tickets.length === 0) {
                //   return res.status(400).send({ message: "Invalid input data" });
                // }
                // Expiry time for the order
                const expiredAt = (0, date_fns_1.addMinutes)(new Date(), 10);
                // Start a transaction
                const newOrder = yield prisma.$transaction((prisma) => __awaiter(this, void 0, void 0, function* () {
                    // Process each ticket
                    for (const ticket of tickets) {
                        const { ticketId, qty } = ticket;
                        if (!ticketId || qty <= 0) {
                            throw new Error("Invalid ticket data");
                        }
                        // Fetch the ticket
                        const existingTicket = yield prisma.ticket.findUnique({
                            where: { id: ticketId },
                        });
                        if (!existingTicket || existingTicket.available < qty) {
                            throw new Error(`Not enough tickets available for ticket ID ${ticketId}`);
                        }
                        // Deduct ticket availability
                        yield prisma.ticket.update({
                            where: { id: ticketId },
                            data: { available: existingTicket.available - qty },
                        });
                    }
                    // Create the order
                    const createdOrder = yield prisma.order.create({
                        data: {
                            total_price,
                            final_price,
                            userId,
                            expiredAt,
                            details: {
                                create: tickets.map((ticket) => ({
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
                }));
                // Send the response
                return res.status(201).send({
                    message: "Order created successfully",
                    order: newOrder,
                });
            }
            catch (error) {
                console.error("Error creating order:", error);
                return res.status(500).send({ message: "Server error", error });
            }
        });
    }
    updateOrderStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { transaction_status, order_id } = req.body;
                if (transaction_status == "settlement") {
                    yield prisma.order.update({
                        data: { status: "Paid" },
                        where: { id: +order_id },
                    });
                }
                res.status(200).send({ message: "Order Updated" });
            }
            catch (error) {
                console.log(error);
                res.status(400).send({ message: "Error updating order status", error });
            }
        });
    }
}
exports.OrderController = OrderController;
