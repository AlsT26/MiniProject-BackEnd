import { Request, Response } from "express";
import prisma from "../prisma";
import { genSalt, hash, compare } from "bcrypt";
import { findUser } from "../services/user.service";
import { sign, verify } from "jsonwebtoken";
import { transporter } from "../services/mailer";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { findReferal } from "../services/referal.service";
import { findPromotor } from "../services/promotor.service";

export class AuthController {
  async registerUser(req: Request, res: Response) {
    try {
      await prisma.$transaction(async (prisma) => {
      const { password, confirmPassword, username, email, referal } = req.body;

      if (password != confirmPassword) throw { message: "Password not match!" };

      const user = await findUser(username, email);
      if (user) throw { message: "username or email has been used !" };
      if (referal != "") {
        const ref = await findReferal(referal);
        if (!ref) throw { message: "referal code not valid !" };
      }

      const salt = await genSalt(10);
      const hashPasword = await hash(password, salt);

      const newUser = await prisma.user.create({
        data: { username, email, password: hashPasword },
      });

      const randomNumber = Math.floor(100 + Math.random() * 900);
      const refCode = `${newUser.id}${randomNumber}`;

      await prisma.user.update({
        where: { id: newUser.id },
        data: { ref_code: refCode },
      });

      const payload = { id: newUser.id, referal:referal };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "10m" });
      const link = `http://localhost:3000/verify/${token}`;

      const templatePath = path.join(__dirname, "../templates", "verify.hbs");
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ username, link });
      await transporter.sendMail({
        from: "sandieswendies@gmail.com",
        to: email,
        subject: "Verify your account",
        html,
      });
      const currentDate = new Date();
      const threeMonthLater = new Date(currentDate);
      threeMonthLater.setMonth(currentDate.getMonth() + 3);

      if (referal != "") {
        await prisma.user_Coupon.create({
          data: {
            percentage: 10,
            expiredAt: threeMonthLater,
            userId: newUser.id,
          },
        });
      }
      res.status(201).send({ message: "Register Successfully ✅" });
    })} catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async loginUser(req: Request, res: Response) {
    try {
      await prisma.$transaction(async (prisma) => {
      const { data, password } = req.body;
      const user = await findUser(data, data);

      if (!user) throw { message: "Account not found !" };
      if (!user.isVerify) throw { message: "Account not Verified !" };

      const isValidPass = await compare(password, user.password);
      if (!isValidPass) {
        throw { message: "Incorrect Password !" };
      }

      const payload = { id: user.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          maxAge: 24 * 3600 * 1000,
          path: "/",
          secure: process.env.NODE_ENV === "production",
        })
        .send({
          message: "Login Sucessfully ✅",
          user,
        });})
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async verifyUser(req: Request, res: Response) {
    const { token } = req.params;
    try {
        const verifiedUser: any = verify(token, process.env.JWT_KEY!);

        if (verifiedUser.isVerify) {
            res.status(400).send({ message: "User is already verified." });
        }

        const currentDate = new Date();
        const threeMonthLater = new Date(currentDate);
        threeMonthLater.setMonth(currentDate.getMonth() + 3);

        await prisma.$transaction(async (prisma) => {
            await prisma.user.update({
                data: { isVerify: true },
                where: { id: verifiedUser.id },
            });

            const user = await prisma.user.findFirst({
                where: { OR: [{ ref_code: verifiedUser.referal }] },
            });

            if (user) {
                await prisma.user_Point.create({
                    data: { point: 10000, expiredAt: threeMonthLater, userId: user.id },
                });
            }
        });

        res.status(200).send({ message: "User verified and points awarded." });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "An error occurred during verification or point creation." });
    }
}

  async test(req: Request, res: Response) {
    try {
      res.status(200).send({ message: "test success" });
    } catch (error) {
      res.status(400).send({ message: error });
    }
  }
  async loginPromotor(req: Request, res: Response) {
    try {
      await prisma.$transaction(async (prisma) => {
      const { data, password } = req.body;
      const promotor = await findPromotor(data, data);

      if (!promotor) throw { message: "Account not found !" };
      if (!promotor.isVerify) throw { message: "Account not Verified !" };

      const isValidPass = await compare(password, promotor.password);
      if (!isValidPass) {
        throw { message: "Incorrect Password !" };
      }

      const payload = { id: promotor.id,role:"promotor" };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          maxAge: 24 * 3600 * 1000,
          path: "/",
          secure: process.env.NODE_ENV === "production",
        })
        .send({
          message: "Login Sucessfully ✅",
          promotor,
        });
    })} catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async show_promotor(req: Request, res: Response) {
    try {
      const a = await prisma.promotor.findMany()
      res.status(200).send({ a });
    } catch (error) {
      res.status(400).send({ message: error });
    }
  }
    async EditPromotor(req: Request, res: Response) {
      try {
        const { id } = req.params;
        await prisma.promotor.update({ data: req.body, where: { id: +id } });
        res.status(200).send("success");
      } catch (error) {
        console.log(error);
        res.status(400).send({ error });
      }
    }

    async RegisterPromotor(req: Request, res: Response) {
      try {
        await prisma.$transaction(async (prisma) => {
        const { password, confirmPassword, name, email} = req.body;
  
        if (password != confirmPassword) throw { message: "Password not match!" };
  
        const user = await findPromotor(name, email);
        if (user) throw { message: "username or email has been used !" };
        
  
        const salt = await genSalt(10);
        const hashPasword = await hash(password, salt);
  
        const newPromotor = await prisma.promotor.create({
          data: { name, email, password: hashPasword },
        });

  
        const payload = { id: newPromotor.id};
        const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "10m" });
        const link = `http://localhost:3000/promotor/verify/${token}`;
  
        const templatePath = path.join(__dirname, "../templates", "verify.hbs");
        const templateSource = fs.readFileSync(templatePath, "utf-8");
        const compiledTemplate = handlebars.compile(templateSource);
        const html = compiledTemplate({ name, link });
        await transporter.sendMail({
          from: "sandieswendies@gmail.com",
          to: email,
          subject: "Verify your account",
          html,
        });
        
        res.status(201).send({ message: "Register Successfully ✅" });
      })} catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
    }
    async verifyPromotor(req: Request, res: Response) {
      const { token } = req.params;
      try {
          const verifiedPromotor: any = verify(token, process.env.JWT_KEY!);
  
          if (verifiedPromotor.isVerify) {
              res.status(400).send({ message: "User is already verified." });
          }
  
          await prisma.$transaction(async (prisma) => {
              await prisma.promotor.update({
                  data: { isVerify: true },
                  where: { id: verifiedPromotor.id },
              });
          });
  
          res.status(200).send({ message: "User verified" });
  
      } catch (error) {
          console.error(error);
          res.status(500).send({ message: "An error occurred during verification" });
      }
  }
}

