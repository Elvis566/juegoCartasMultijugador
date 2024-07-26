import { EmailValidator } from "@angular/forms";

export interface UserI {
    email: EmailValidator;
    password: string;
    apodo: string;
    avatar: string;
    id: string;
}