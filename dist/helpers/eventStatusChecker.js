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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const prisma_1 = __importDefault(require("../prisma"));
function updateEventStatus() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const currentDate = new Date();
            yield prisma_1.default.event.updateMany({
                where: {
                    date: { lt: currentDate },
                    isActive: true,
                },
                data: {
                    isActive: false,
                },
            });
            console.log("Event statuss updated successfully");
        }
        catch (error) {
            console.log("Error updating event statuses:", error);
        }
        finally {
            yield prisma_1.default.$disconnect();
        }
    });
}
node_cron_1.default.schedule("0 * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Running event status update task...");
    yield updateEventStatus();
}));
