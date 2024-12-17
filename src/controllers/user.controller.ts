import { Request, Response } from "express";
import prisma from "../prisma";
import { Prisma } from "@prisma/client";
// import { cloudinaryUpload } from "../services/cloudinary";

export class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      console.log(req.user)
      const { search, page = 1 } = req.query;
      const {user} = req.body
      console.log("user",user)
      const limit = 3;
      const filter: Prisma.UserWhereInput = {};
      if (search) {
        filter.OR = [
          { username: { contains: search as string, mode: "insensitive" } },
          { email: { contains: search as string, mode: "insensitive" } },
        ];
      }
      const countUser = await prisma.user.aggregate({_count:{_all:true}})
      const total_page =Math.ceil(+countUser._count._all/+limit)
      const users = await prisma.user.findMany({
        where: filter,
        orderBy: { id: "asc" },
        take : limit,
        skip:limit *(+page-1)
      });
      res.status(200).send({ total_page,page,users });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error });
    }
  }
  async getUserID(req: Request, res: Response) {
    try {
      const user = await prisma.user.findUnique({ where: { id: req.user?.id } });
      res.status(200).send({ user });
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  async DeleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUnique({
        where: { id: +id },
      });

      if (!user) {
        res.status(404).json({ message: "User not found" });
      }
      await prisma.user.delete({
        where: { id: +id },
      });
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async EditUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.user.update({ data: req.body, where: { id: +id } });
      res.status(200).send("success");
    } catch (error) {
      console.log(error);
      res.status(400).send({ error });
    }
  }
  async EditAvatar(req:Request,res:Response){
    // try{
    //   if(!req.file) throw {message:"file empty"}
    //   const link = `http://localhost:8000/api/public/avatar/${req.file.filename}`
    //   await prisma.user.update({
    //     data:{avatar:link},
    //     where:{id:req.user?.id}
    //   })
    //   res.status(200).send({message:"avatar edited"})
    // }catch(error){
    //   res.status(400).send(error)
    // }
  }
  async EditCloudinary(req:Request,res:Response){
    // try{
    //   if(!req.file) throw {message:"file empty"}
    //   const {secure_url} = await cloudinaryUpload(req.file,"avatar")
    //   await prisma.user.update({
    //     data:{avatar:secure_url},
    //     where:{id:req.user?.id}
    //   })
    //   res.status(200).send({message:"avatar edited"})
    // }catch(error){
    //   res.status(400).send(error)
    // }
  }
  async coupon(req: Request, res: Response) {
    try {
      const coupon = await prisma.user_Coupon.findMany()
      res.status(200).send({ coupon });
    } catch (error) {
      res.status(400).send({ message: error });
    }
  }async point(req: Request, res: Response) {
    try {
      const point = await prisma.user_Point.findMany()
      res.status(200).send({ point });
    } catch (error) {
      res.status(400).send({ message: error });
    }
  }
}
