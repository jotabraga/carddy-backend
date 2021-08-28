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

describe("POST /sign-up", () => {
  it("should answer with status 201 for valid new user", async () => {
    const user = await createUser();

    const response = await supertest(app).post("/sign-up").send(user);

    expect(response.status).toBe(201);
  });

  it("should answer with status 400 for invalid email or password", async () => {
    const user = {};

    const response = await supertest(app).post("/sign-up").send(user);

    expect(response.status).toBe(400);
  });

  it("should answer with status 409 for existing user", async () => {
    const user = await createUser();

    await supertest(app).post("/sign-up").send(user);
    const response = await supertest(app).post("/sign-up").send(user);

    expect(response.status).toBe(409);
  });
});
