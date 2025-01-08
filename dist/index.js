"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_router_1 = require("./routers/user.router");
const auth_router_1 = require("./routers/auth.router");
const promotor_router_1 = require("./routers/promotor.router");
const path_1 = __importDefault(require("path"));
const event_router_1 = require("./routers/event.router");
const order_router_1 = require("./routers/order.router");
const PORT = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    origin: process.env.BASE_URL_FE,
    credentials: true,
}));
app.get("/", (req, res) => {
    res.status(200).send("welcome to api");
});
const userRouter = new user_router_1.UserRouter();
const authRouter = new auth_router_1.AuthRouter();
const promotorRouter = new promotor_router_1.PromotorRouter();
const eventRouter = new event_router_1.EventRouter();
const orderRouter = new order_router_1.OrderRouter();
app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/promotor", promotorRouter.getRouter());
app.use("/api/event", eventRouter.getRouter());
app.use("/api/order", orderRouter.getRouter());
app.listen(PORT, () => {
    console.log(`server running on -> http://localhost:${PORT}/api`);
});
app.use("/api/public", express_1.default.static(path_1.default.join(__dirname, "../public")));
