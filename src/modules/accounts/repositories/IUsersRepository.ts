import { User } from "../entities/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void>;

  findByName(name: string): Promise<User>;

  list(): Promise<User[]>;
}

export { IUsersRepository };
