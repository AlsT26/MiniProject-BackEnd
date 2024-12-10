import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { checkAdmin, verifyToken } from "../middlewares/verify";
// import { uploader } from "../services/uploader";

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
  }
  getRouter(): Router {
    return this.router;
  }
}
