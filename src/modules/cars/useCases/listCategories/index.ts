import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "../listCategories/ListCategoriesController";
import { ListCategoriesUseCase } from "../listCategories/ListCategoriesUseCase";

const categoriesRepository =  CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController}