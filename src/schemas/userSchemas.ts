import Joi from "joi";

export const signInData = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const signUpData = signInData.append({
    confirmPassword: Joi.ref("password"),
});