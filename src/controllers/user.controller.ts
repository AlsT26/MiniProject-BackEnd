import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export class UserController {
    async createUser(req: Request, res: Response) {
        try {
          await prisma.user.create({ data: req.body });
          res.status(201).send("User created ✅");
        } catch (err) {
          console.log(err);
          res.status(400).send(err);
        }
      }
      async deleteUser(req: Request, res: Response) {
        try {
          const { id } = req.params;
          await prisma.user.delete({ where: { id: +id } });
          res.status(200).send("User deleted ✅");
        } catch (err) {
          console.log(err);
          res.status(400).send(err);
        }
      }
      async test(req: Request, res: Response) {
        try {
          res.status(201).send("Test ✅");
        } catch (err) {
          console.log(err);
          res.status(400).send(err);
        }
      }
}