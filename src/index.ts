import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRouter } from "./routers/user.router";
import { AuthRouter } from "./routers/auth.router";
const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/ticketbooth", (req: Request, res: Response) => {
  res.status(200).send("TicketBooth API");
});
const userRouter = new UserRouter();
const authRouter = new AuthRouter();

app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
