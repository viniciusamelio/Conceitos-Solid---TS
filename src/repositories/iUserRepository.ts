import { User } from "../entities/user";

export interface iUserRepository{
    findByEmail(email:string) : Promise<User>;
    save(user:User) : Promise<void>;
}