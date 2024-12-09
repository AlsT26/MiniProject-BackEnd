import { Router } from "express";
import { UserController } from "../controllers/user.controller";
// import { checkAdmin, verifyToken } 
// import { uploader } 

export class UserRouter {
  private userController: UserController;
  private router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/create", this.userController.createUser);
    this.router.delete("/delete/:id", this.userController.deleteUser);
    this.router.get("/create", this.userController.test); // just test

  }

  getRouter(): Router {
    return this.router;
  }
}