import { Router } from "express";
import * as userController from "../controllers/userController";
const router = Router();

router.post("/sign-in", userController.signIn);
router.post("/sign-up", userController.signUp);
router.get("/users/:id", userController.getUserById);
router.get("/users", userController.getUsers);

export default router