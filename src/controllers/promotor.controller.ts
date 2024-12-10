import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class PromotorController {
  async getPromotors(req: Request, res: Response) {}

  async createPromotor(req: Request, res: Response) {
    try {
      await prisma.promotor.create({ data: req.body });
      res.status(201).send({ message: "A new promotor has been created" });
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: error });
    }
  }
}
