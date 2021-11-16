import "./setup";
import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database";

const app = express();
app.use(cors());
app.use(express.json());

import handleError from "./middlewares/handleError";


import router from "./routes/router";

app.get("/health", (_req, res) => {
  res.send("OK!");
});

app.use("/", router);
app.use(handleError);

export async function init () {
  await connectDatabase();
}

export default app;
