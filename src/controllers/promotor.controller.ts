import { Prisma, PrismaClient } from "../../prisma/generated/client";
import { Request, Response } from "express";
import { createSlug } from "../helpers/slugMaker";
import { cloudinaryUpload } from "../services/cloudinary";

const prisma = new PrismaClient();

export class PromotorController {
  async getPromotors(req: Request, res: Response) {
    try {
      const { search, page = 1, limit = 5 } = req.query;
      const filter: Prisma.PromotorWhereInput = {};
      if (search) {
        filter.OR = [{ name: { contains: search as string, mode: "insensitive" } }];
      }
      const countPromotors = await prisma.promotor.aggregate({ _count: { _all: true } });
      const total_page = Math.ceil(countPromotors._count._all / +limit);
      const promotors = await prisma.promotor.findMany({
        where: filter,
        orderBy: { id: "asc" },
        take: +limit,
        skip: +limit * (+page - 1),
      });
      res.status(200).send({ countPromotors, total_page, page, promotors });
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: error });
    }
  }

  async getPromotorById(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const promotor = await prisma.promotor.findUnique({
        where: { id: parseInt(id, 10) },
      });
      if (!promotor) {
        return res.status(400).send({ message: `Promotor by id : ${id} is not found` });
      }
      res.status(200).send({ promotor });
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error });
    }
  }

  async createPromotor(req: Request, res: Response) {
    try {
      await prisma.promotor.create({ data: req.body });
      res.status(201).send({ message: "A new promotor has been created" });
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: error });
    }
  }

  async createEvent(req: Request, res: Response): Promise<any> {
    try {
      const { promotorId } = req.params;
      // console.log(req.params.promotorId);
      const { title, description, category, location, venue, dateTime } = req.body;
      const promotor = await prisma.promotor.findUnique({
        where: { id: +promotorId },
      });
      const slug = createSlug(title);

      if (!promotor) {
        return res.status(404).send({ message: "Promotor not found" });
      }
      if (!req.file) throw { message: "thumbnail empty" };
      const { secure_url } = await cloudinaryUpload(req.file, "TicketHub");

      const newEvent = await prisma.event.create({
        data: {
          title,
          description,
          category,
          location,
          venue,
          slug,
          thumbnail: secure_url,
          dateTime,
          promotorId: +promotorId,
        },
      });

      res.status(201).send({ message: `New event by promotor with id ${promotor.id} has been created successfully`, newEvent });
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: error });
    }
  }
}
