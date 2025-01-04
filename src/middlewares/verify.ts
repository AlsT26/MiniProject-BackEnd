import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserPayload } from "../custom";


export const verifyToken = async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try{
        const token = req.header("Authorization")?.replace("Bearer ", "");
        // const token = req.cookies?.token;
        if(!token) throw "Unauthorize";
        const verifiedUser = verify(token,process.env.JWT_KEY!)
        req.user = verifiedUser as UserPayload
        next();
    }catch(error){
        console.log(error)
        res.status(400).send(error)

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
