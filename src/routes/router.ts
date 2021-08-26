import { Router } from "express";

const mainRouter = Router();

mainRouter.use("/sign-up", signUp);