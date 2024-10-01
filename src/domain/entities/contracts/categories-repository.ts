import { CategoriesModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/categories-pg";

export const CATEGORIES_REPOSITORY = "CATEGORIES_REPOSITORY";

export interface ICategoriesRepository {
    CategoriesRepository: () => Promise<CategoriesModelPg[]> , 
    getCategoriesById: (id: number) => Promise<CategoriesModelPg | null>,
    getCategoriesByLabel: (label: string) => Promise<CategoriesModelPg | null>;
    
 

}
export class CategoriesRepositoryImpl implements ICategoriesRepository{
   
    async CategoriesRepository(): Promise<CategoriesModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await CategoriesModelPg.findAll();
    }   
  
  
     //filter par id 
    async getCategoriesById(id_categorie: number): Promise<CategoriesModelPg | null> {
        return await CategoriesModelPg.findOne({
            where: { id_categorie }
        });
    }
      //filter par label 
      async getCategoriesByLabel(label: string): Promise<CategoriesModelPg | null> {
        return await CategoriesModelPg.findOne({
            where: { label }
        });
    }
     
}