import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { checkAdmin, verifyToken } from "../middlewares/verify";

export class UserRouter {
  private userController: UserController;
  private router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get("/", this.userController.getUsers);

    this.router.get("/coupon", this.userController.coupon);
    this.router.get("/point", this.userController.point);
    this.router.post("/", this.userController.AddUser);

    this.router.patch(
      "/avatar",
      verifyToken,
      // uploader("diskStorage", "avatar-", "/avatar").single("file"),
      this.userController.EditAvatar
    );
    this.router.get("/profile", verifyToken, this.userController.getUserID);
    this.router.patch(
      "/avatar-cloud",
      verifyToken,
      // uploader("memoryStorage", "avatar").single("file"),
      this.userController.EditCloudinary
    );
    this.router.patch("/:id", this.userController.EditUser);
    this.router.delete("/:id", this.userController.DeleteUser);
    this.router.post("/:id/:eventId/review", this.userController.addReview);
  }
  getRouter(): Router {
    return this.router;
  }
}
