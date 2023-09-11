import { inject, injectable} from "tsyringe";
import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"

@injectable()
class ListSpecificationsUseCase {
  @inject("SpecificationsRepository")
	constructor(private specificationsRepository: ISpecificationsRepository) {}

  async execute(): Promise<Specification[]>{
    const specifications = await this.specificationsRepository.list();

    return specifications;
  }
}

export {ListSpecificationsUseCase};