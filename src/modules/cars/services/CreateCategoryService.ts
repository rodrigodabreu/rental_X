import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
	name: string;
	description: string;
}

class CreateCategoryService {
	constructor(private categoriesRepository: ICategoriesRepository) {}

	execute({ name, description }: IRequest): void {
		const categoryAlreadyExists = this.categoriesRepository.findByName(name);

		if (categoryAlreadyExists) {
			return null;
		}
		this.categoriesRepository.create({ name, description });
	}
}

export { CreateCategoryService };
