import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validateRegister = [
  body("username").notEmpty().withMessage("username is rquired"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid format"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 3 })
    .withMessage("minimum 3 letter"),
    body("confirmPassword").notEmpty().withMessage("confirm password should not be empty").custom((value,{req})=>{
        if(value != req.body.password){
            throw new Error("Password not match")
        }
        return true;
    }),
    (req:Request,res:Response,next:NextFunction)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).send({errors:errors.array()})
        }next()
    }

];
