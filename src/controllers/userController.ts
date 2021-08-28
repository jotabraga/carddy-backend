import { Request, Response } from "express";
import {signInData, signUpData} from "../schemas/userSchemas";
import { UserInterface, UserRegisterData } from "../interfaces/UserInterfaces";
import * as userService from "../services/userService";

export async function signUp(req: Request, res: Response){
    const signUpError = signUpData.validate(req.body).error;
    if(signUpError) return res.sendStatus(400);

    const createdUser = await userService.registerUser(req.body);
    if(!createdUser) return res.sendStatus(409);
    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response){

    const signInError = signInData.validate(req.body).error;
    if(signInError) return res.sendStatus(400);

    const {email, password}: UserInterface = req.body;
    const token = await userService.login({ email, password });
    if(!token) return res.sendStatus(401);
    res.send(token).status(200);
}