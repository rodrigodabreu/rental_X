import  { Router } from "express";
import {categoriesRoutes} from "./categories.routes"
import { specificationsRoutes } from "./specifications.routes"

//Tudo que for referente a rota deve ser inserido nesse arquivo

const router = Router();

router.use("/categories", categoriesRoutes)
router.use("/specifications", specificationsRoutes)

export {router}