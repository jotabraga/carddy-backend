import { getRepository } from "typeorm";

import User from "../../src/entities/User";
import Session from "../../src/entities/Session";

export async function clearDatabase () {
  await getRepository(Session).delete({});
  await getRepository(User).delete({});
}
