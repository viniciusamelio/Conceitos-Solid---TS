import { MailtrapMailProvider } from "../../providers/MailtrapMailProvider";
import { PostgresUserRepository } from "../../repositories/PortgresUsersRepository";
import { CreateUserUseCase } from "./createUserUseCase";
import { CreateUserController } from "./createUserController";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUserRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(postgresUserRepository,mailtrapMailProvider);

const createUserController = new CreateUserController(createUserUseCase);

export {createUserUseCase, createUserController};