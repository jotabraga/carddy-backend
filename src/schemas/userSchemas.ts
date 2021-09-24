import Joi from "joi";

export const signInData = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const signUpData = signInData.append({
    confirmPassword: Joi.ref("password"),
});