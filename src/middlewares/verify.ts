import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserPayload } from "../custom";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw "Unauthorize";
    }
    const token = authHeader.replace("Bearer ", "");
    const verifiedUser = verify(token, process.env.JWT_KEY!);
    req.user = verifiedUser as UserPayload;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Unauthorize" });
  }
};

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role.toLowerCase() == "admin") {
    next();
  } else {
    res.status(403).send({ message: "Forbidden: unauthorized user" });
  }
};
