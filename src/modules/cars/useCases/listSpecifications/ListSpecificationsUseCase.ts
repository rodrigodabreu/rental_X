import { Specification } from "../../entities/Specification";
import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";

class ListSpecificationsUseCase {
	constructor(private specificationsRepository: SpecificationRepository) {}

  execute(): Specification[]{
    return this.specificationsRepository.list();
  }
}

export {ListSpecificationsUseCase};