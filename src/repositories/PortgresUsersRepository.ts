import { iUserRepository } from "./iUserRepository";
import { User } from "../entities/user";

export class PostgresUserRepository implements iUserRepository{

    private users: User[] = [];

    async findByEmail(email:string):Promise<User>{
        const user : User  = this.users.find(user => user.email === email) ?? this.users[0];

        return user;
    }

    async save(user:User): Promise<void>{
        this.users.push(user)
    }
}