import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createUser } from "../factories/userFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("POST /sign-in", () => {
  it("should answer with status 200 for valid user", async () => {
    const user = await createUser();
    delete user.id;

    const response = await supertest(app).post("/sign-in").send(user);

    expect(response.status).toBe(200);
  });

  it("should answer with status 400 for invalid email or password", async () => {
    const user = {};
    const response = await supertest(app).post("/sign-in").send(user);

    expect(response.status).toBe(400);
  });

  it("should answer with status 401 for inexisting user", async () => {
    const user = {
      email: "email@email.com",
      password: "123456"
    };
    const response = await supertest(app).post("/sign-in").send(user);

    expect(response.status).toBe(401);
  });
});
