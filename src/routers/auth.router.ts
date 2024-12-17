import { Router } from "express";
import { AuthController } from "../controllers/auth.contoller";

export class AuthRouter {
  private authController: AuthController;
  private router: Router;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/", this.authController.registerUser);
    this.router.get("/promotor", this.authController.show_promotor);
    this.router.post("/promotor", this.authController.RegisterPromotor);

    this.router.get("/", this.authController.test);
    this.router.post("/login", this.authController.loginUser);
    this.router.post("/promotor/login", this.authController.loginPromotor);

    this.router.patch("/verify/:token", this.authController.verifyUser);
    this.router.patch("/promotor/verify/:token", this.authController.verifyPromotor);

    this.router.patch("/promotor/:id", this.authController.EditPromotor);

  }

  getRouter(): Router {
    return this.router;
  }
}