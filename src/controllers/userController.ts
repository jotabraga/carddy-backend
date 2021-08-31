import { Request, Response } from "express";
import { signInData, signUpData } from "../schemas/userSchemas";
import { UserInterface } from "../interfaces/UserInterfaces";
import * as userService from "../services/userService";

export async function signUp(req: Request, res: Response) {
    const signUpError = signUpData.validate(req.body).error;
    if (signUpError) return res.sendStatus(400);

    const createdUser = await userService.registerUser(req.body);
    if (!createdUser) return res.sendStatus(409);
    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {

    const signInError = signInData.validate(req.body).error;
    if (signInError) return res.sendStatus(400);

    const { name, email, password }: UserInterface = req.body;
    const token = await userService.login({ name, email, password });
    if (!token) return res.sendStatus(401);
    res.send(token).status(200);
}

export async function getUserById(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.sendStatus(400);

    const user = await userService.getUserById(id);
    if (!user) return res.sendStatus(404);
    res.send(user).status(200);
}

export async function getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    res.send(users).status(200);
}