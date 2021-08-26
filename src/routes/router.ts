import { Router } from "express";

import userRouter from "./user";

const mainRouter = Router();


mainRouter.use("/", userRouter);


export default mainRouter;