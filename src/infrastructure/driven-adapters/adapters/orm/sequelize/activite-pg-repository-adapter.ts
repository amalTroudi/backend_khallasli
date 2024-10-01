import { IActiviteRepository } from "@/domain/entities/contracts/activite-repository";
import { ActiviteModelPg } from "./models/activite-pg";

export class ActivitePgRepositoryAdapter implements IActiviteRepository {
    
  
    async  activiteRepository(): Promise<ActiviteModelPg[]> {
        return await ActiviteModelPg.findAll({
            attributes: { exclude: ['password'] } // Exclure le champ password
        });
    }
}
    