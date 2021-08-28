import dotenv from "dotenv";

const { NODE_ENV } = process.env;

const envPath: string =
  NODE_ENV === "test" ? "local.test.env" : "local.dev.env";

dotenv.config({ path: envPath });