import { ICategoriesRepository } from "@/domain/entities/contracts/categories-repository";
import { CategoriesModelPg } from "./models/categories-pg";

export class CategoriesPgRepositoryAdapter implements ICategoriesRepository {

    async  CategoriesRepository(): Promise<CategoriesModelPg[]> {
        return await CategoriesModelPg.findAll({
            attributes: { exclude: ['password'] } // Exclure le champ password
        });
    }
   
    async getCategoriesById(id: number): Promise<CategoriesModelPg | null> {
        return await CategoriesModelPg.findOne({
            where: { id }
        });
    }
    async getCategoriesByLabel(label: string): Promise<CategoriesModelPg | null> {
        return await CategoriesModelPg.findOne({
            where: { label }
        });
    }
   
}
    