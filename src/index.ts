import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRouter } from "./routers/user.router";
import { AuthRouter } from "./routers/auth.router";
import { PromotorRouter } from "./routers/promotor.router";
import cookieParser from "cookie-parser";
import path from "path";
import { EventRouter } from "./routers/event.router";
import { OrderRouter } from "./routers/order.router";
const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.BASE_URL_FE,
    credentials: true,
  })
);
app.use(cookieParser());
app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("welcome to api");
});
const userRouter = new UserRouter();
const authRouter = new AuthRouter();
const promotorRouter = new PromotorRouter();
const eventRouter = new EventRouter();
const orderRouter = new OrderRouter();

app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/promotor", promotorRouter.getRouter());
app.use("/api/event", eventRouter.getRouter());
app.use("/api/order", orderRouter.getRouter());
app.listen(PORT, () => {
  console.log(`server running on -> http://localhost:${PORT}/api`);
});
app.use("/api/public", express.static(path.join(__dirname, "../public")));