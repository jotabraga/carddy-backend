import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { getRepository } from "typeorm";
import { UserInterface } from "../interfaces/UserInterfaces";
import User from "../entities/User";
import Session from "../entities/Session";

export async function registerUser({ email, password }: UserInterface) {

  const alreadyExists = await getRepository(User).findOne({ email });
  if (alreadyExists) return false;

  const hashPassword = bcrypt.hashSync(password, 12);
  const createdUser = await getRepository(User).save({ email, password: hashPassword });
  return createdUser;
}

export async function login({ email, password }: UserInterface) {

  const user = await getRepository(User).findOne({ email });
  if (!user) return false;

  if (bcrypt.compareSync(password, user.password)) {
    const token = uuid();
    await getRepository(Session).save({ user, token });
    return { token };

  } else {
    return false;
  }
}

export async function getUserById(id: number) {
  const user = await getRepository(User).findOne({ id });
  if(!user) return false;
  return user;
}

export async function getUsers() {
  const users = await getRepository(User).find();
  return users;
}