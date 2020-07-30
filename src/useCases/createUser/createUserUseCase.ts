import { iUserRepository } from "../../repositories/iUserRepository";
import { ICreateUserRequestDto } from "./createUserDto";
import { User } from "../../entities/user";
import { IMailProvider } from "../../providers/iMailProvider";

export class CreateUserUseCase{
    constructor(private userRepository : iUserRepository, private mailProvider : IMailProvider){}

    async execute(data: ICreateUserRequestDto){
        const userExists = await this.userRepository.findByEmail(data.email);

        if(userExists){
            throw new Error("Usuário já existente");
        }

        const user = new User(data);

        await this.userRepository.save(user);

        /*this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from:{
                name: "Vinicius Amélio",
                email: "vinicius.amelio@zoho.com"
            },
            subject: "Teste de e-mail",
            body: "<p>O teste funcionou</p>"
        })*/
    }

}