import { CategoriesModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/categories-pg";

export const CATEGORIES_SERVICE = "CATEGORIES_SERVICE";

export interface ICategoriesService {
    categoriesService: () => Promise<CategoriesModelPg[]>,
    getCategoriesById: (id: number) => Promise<CategoriesModelPg | null>;
    getCategoriesByLabel: (label: string) => Promise<CategoriesModelPg | null>;
    

}