import { User } from "../../entities/User";
import { Repository, getRepository } from "typeorm";
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOne({ name });
    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }
}

export { UsersRepository };
