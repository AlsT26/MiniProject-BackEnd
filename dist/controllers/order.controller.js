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
    getUserOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                console.log("Fetching order for user ID:", userId);
                if (!userId) {
                    return res.status(404).send({ message: "Unauthorized User" });
                }
                const userOrders = yield prisma.order.findMany({
                    where: {
                        userId: userId,
                    },
                    select: {
                        id: true,
                        total_price: true,
                        final_price: true,
                        status: true,
                        createdAt: true,
                        details: {
                            select: {
                                ticketId: true,
                                qty: true,
                                ticket: {
                                    select: {
                                        id: true,
                                        title: true,
                                        event: {
                                            select: {
                                                id: true,
                                                title: true,
                                                dateTime: true,
                                                location: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                });
                if (userOrders.length === 0) {
                    return res.status(404).send({ message: `This user with id ${userId} haven't made any orders` });
                }
                // Transform the response to include relevant event details
                const transformedOrders = userOrders.map((order) => ({
                    id: order.id,
                    total_price: order.total_price,
                    final_price: order.final_price,
                    status: order.status,
                    createdAt: order.createdAt,
                    tickets: order.details.map((detail) => ({
                        ticketId: detail.ticketId,
                        qty: detail.qty,
                        ticketTitle: detail.ticket.title,
                        event: detail.ticket.event,
                    })),
                }));
                res.status(200).send({
                    message: "User orders fetched successfully",
                    orders: transformedOrders,
                });
            }
            catch (error) {
                console.error("Error fetching user orders:", error);
                res.status(500).send({ message: "Order: Server Error", error });
            }
        });
    }
    getUserOrdersByStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const status = req.query.status;
                if (!userId) {
                    return res.status(401).send({ message: "Unauthorized User" });
                }
                const validStatuses = Object.values(client_1.OrderStatus);
                const statusFilter = validStatuses.includes(status) ? status : undefined;
                const userOrders = yield prisma.order.findMany({
                    where: Object.assign({ userId }, (statusFilter && { status: statusFilter })),
                    select: {
                        id: true,
                        total_price: true,
                        final_price: true,
                        status: true,
                        createdAt: true,
                        details: {
                            select: {
                                ticketId: true,
                                qty: true,
                                ticket: {
                                    select: {
                                        id: true,
                                        title: true,
                                        event: {
                                            select: {
                                                id: true,
                                                title: true,
                                                dateTime: true,
                                                location: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                });
                if (userOrders.length === 0) {
                    return res.status(404).send({ message: `No orders found with status ${status || "All"}` });
                }
                const transformedOrders = userOrders.map((order) => ({
                    id: order.id,
                    total_price: order.total_price,
                    final_price: order.final_price,
                    status: order.status,
                    createdAt: order.createdAt,
                    tickets: order.details.map((detail) => ({
                        ticketId: detail.ticketId,
                        qty: detail.qty,
                        event: detail.ticket.event,
                        title: detail.ticket.title,
                    })),
                }));
                res.status(200).send({
                    message: "User orders fetched successfully",
                    orders: transformedOrders,
                });
            }
            catch (error) {
                console.error("Error fetching user orders by status:", error);
                res.status(500).send({ message: "Order: Server Error", error });
            }
        });
    }
    getOrderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { id } = req.params;
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                if (!userId) {
                    return res.status(401).send({ message: "Unauthorized User" });
                }
                const order = yield prisma.order.findUnique({
                    where: { id: +id },
                    include: {
                        details: {
                            include: {
                                ticket: {
                                    include: {
                                        event: true,
                                    },
                                },
                            },
                        },
                    },
                });
                if (!order || order.userId !== userId) {
                    return res.status(404).send({ message: "Order not found or unauthorized access." });
                }
                res.status(200).send({ message: "Order fetched successfully", order });
            }
            catch (error) {
                console.error("Error fetching order details:", error);
                res.status(500).send({ message: "Server error", error });
            }
        });
    }
}
exports.OrderController = OrderController;
