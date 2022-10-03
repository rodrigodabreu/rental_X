interface IRequest {
	name: string;
	description: string;
}

class CreateSpecificationService {
	constructor(private specificationRepository: ISpecificationRepository) {}

	execute({ name, description }: IRequest): void {
		const specificationAlreadyExists = this.specificationRepository.find(name);

		if (!specificationAlreadyExists) {
			throw new Error(`Specification ${name} already exists`);
		}

		this.specificationRepository.create({ name, description });
	}
}

export { CreateSpecificationService };
