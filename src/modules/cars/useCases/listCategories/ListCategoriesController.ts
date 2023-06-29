import { Request, Response } from "express";
import { ListCategoriesUserCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoryUseCase: ListCategoriesUserCase) {
    }

    handle(request: Request, response: Response): Response {
        const all = this.listCategoryUseCase.execute();

        return response.json(all);
    }
}

export { ListCategoriesController };