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

describe("GET /users/:id", () => {
  it("should answer with status 200 for valid user id", async () => {
    const user = await createUser();

    const response = await supertest(app).get(`/users/${user.id}`);

    expect(response.status).toBe(200);
  });

  it("should answer with status 400 for not number id", async () => {
    const response = await supertest(app).get("/users/nine");

    expect(response.status).toBe(400);
  });

  it("should answer with status 404 for inexisting id", async () => {
    const response = await supertest(app).get("/users/99999");

    expect(response.status).toBe(404);
  });
});
