import { CATEGORIES_REPOSITORY, ICategoriesRepository } from "@/domain/entities/contracts/categories-repository";
import { CategoriesModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/categories-pg";
import { Adapter, Service } from "@tsclean/core";
import { ICategoriesService } from "../categories-service";


@Service()
export class CategoriesServiceImpl implements ICategoriesService {
   
    constructor(
        @Adapter(CATEGORIES_REPOSITORY) private readonly categoriesRepository: ICategoriesRepository 
    ) {
    }

    async  categoriesService(): Promise<CategoriesModelPg[]> {
        return await this.categoriesRepository.CategoriesRepository();
    }
    async getCategoriesById(id: number): Promise<CategoriesModelPg | null> {
        return await this.categoriesRepository.getCategoriesById(id);
    }
    async getCategoriesByLabel(id_bill: string): Promise<CategoriesModelPg | null> {
        return await this.categoriesRepository.getCategoriesByLabel(id_bill);
    }
   
}