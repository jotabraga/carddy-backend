export interface UserInterface {
    email: string;
    password: string;
}

export interface UserRegisterData extends UserInterface {
    confirmPassword: string;
}