import { getRepository } from "typeorm";
import bcrypt from 'bcrypt';

import User from "../../src/entities/User";

export async function createUser () {
  const user = getRepository(User).create({
    email: "email@email.com",
    password: "123456"
  });
  const hashPassword = bcrypt.hashSync(user.password, 12);

  const saved = await getRepository(User).save({...user, password: hashPassword});

  return {...user, id: saved.id};
}
