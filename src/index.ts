import express, { Application, Request, Response } from "express";
import cors from "cors";

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

// app.use("/ticketbooth");

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
