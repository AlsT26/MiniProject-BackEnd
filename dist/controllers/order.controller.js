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
const client_1 = require("../../prisma/generated/client");
const prisma = new client_1.PrismaClient();
class OrderController {
    createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
exports.OrderController = OrderController;
