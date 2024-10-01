import { ActiviteModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/activite-pg";
import { AlimentationCommercialPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-pdv-pg";

export const ALIMENTATION_COMMERCIAL_PDV_REPOSITORY = "ALIMENTATION_COMMERCIAL_PDV_REPOSITORY";

export interface IAlimentationCommercialPdvRepository {
    alimentationCommercialPdvRepository: () => Promise<AlimentationCommercialPdvModelPg[]> , 
    getAlimentationCommercialPdvSortedByMontantAS: () => Promise<AlimentationCommercialPdvModelPg[]> , 
    getAlimentationCommercialPdvSortedByMontantDesc: () => Promise<AlimentationCommercialPdvModelPg[]> ,
    getAlimentationCommercialPdvByStatus: (status: number) => Promise<AlimentationCommercialPdvModelPg[]>, 
    countAlimentationCommercialPdvByStatus: (status: number) => Promise<number> ,
    getAlimentationCommercialPdvById: (id: number) => Promise<AlimentationCommercialPdvModelPg | null>;
 

}
export class AlimentationCommercialPdvRepositoryImpl implements IAlimentationCommercialPdvRepository{
   
    async alimentationCommercialPdvRepository(): Promise<AlimentationCommercialPdvModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await AlimentationCommercialPdvModelPg.findAll();
    }   
    async getAlimentationCommercialPdvSortedByMontantAS(): Promise<AlimentationCommercialPdvModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre ascendant
        return await AlimentationCommercialPdvModelPg.findAll({
            order: [['montant', 'ASC']]
        });
    }
    async getAlimentationCommercialPdvSortedByMontantDesc(): Promise<AlimentationCommercialPdvModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre décroissant
        return await AlimentationCommercialPdvModelPg.findAll({
            order: [['montant', 'DESC']]
        });
    }
    // Nouvelle méthode pour récupérer les enregistrements où status = 3
    async getAlimentationCommercialPdvByStatus(status: number): Promise<AlimentationCommercialPdvModelPg[]> {
        return await AlimentationCommercialPdvModelPg.findAll({
            where: {
                status: status // Filtrer sur le champ status
            }
        });
    }
    async countAlimentationCommercialPdvByStatus(status: number): Promise<number> {
        return await AlimentationCommercialPdvModelPg.count({
            where: { status }
        });
    }
    async getAlimentationCommercialPdvById(id: number): Promise<AlimentationCommercialPdvModelPg | null> {
        return await AlimentationCommercialPdvModelPg.findOne({
            where: { id }
        });
    }
}