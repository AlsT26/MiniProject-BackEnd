import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserPayload } from "../custom";

export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // const token = req.header("Authorization")?.replace("Bearer ", "");
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).send({ message: "Unauthorized: no token provided" });
      return;
    }
    const verifiedUser = verify(token, process.env.JWT_KEY!);
    req.user = verifiedUser as UserPayload;
    console.log("Verified user:", req.user); // For debugging
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role.toLowerCase() == "admin") {
    next();
  } else {
    res.status(403).send({ message: "Forbidden: unauthorized user" });
  }
};
