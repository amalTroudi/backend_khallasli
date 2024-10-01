import { ActiviteModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/activite-pg";

export const ACTIVITE_REPOSITORY = "ACTIVITE_REPOSITORY";

export interface IActiviteRepository {
    activiteRepository: () => Promise<ActiviteModelPg[]>
}
export class ActiviteRepositoryImpl implements IActiviteRepository {
  
    async activiteRepository(): Promise<ActiviteModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await ActiviteModelPg.findAll();
    }
}