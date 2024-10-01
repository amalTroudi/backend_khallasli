import { IAlimentationCommercialPdvRepository } from "@/domain/entities/contracts/alimentation-commercial-pdv";
import { AlimentationCommercialPdvModelPg } from "./models/alimentation-commercial-pdv-pg";

export class AlimentationCommercialPdvPgRepositoryAdapter implements IAlimentationCommercialPdvRepository {
    
  
    async  alimentationCommercialPdvRepository(): Promise<AlimentationCommercialPdvModelPg[]> {
        return await AlimentationCommercialPdvModelPg.findAll({
            attributes: { exclude: ['password'] } // Exclure le champ password
        });
    }
     //  méthode pour récupérer les données triées par montant ass
     async getAlimentationCommercialPdvSortedByMontantAS(): Promise<AlimentationCommercialPdvModelPg[]> {
        return await AlimentationCommercialPdvModelPg.findAll({
            order: [['montant', 'ASC']], // Tri par montant en ordre ascendant
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
                status: status // Filtre sur le status
            }
        });
    }
    async countAlimentationCommercialPdvByStatus(status: number): Promise<number> {
        return await AlimentationCommercialPdvModelPg.count({
            where: { status: status }
        });
    }
    async getAlimentationCommercialPdvById(id: number): Promise<AlimentationCommercialPdvModelPg | null> {
        return await AlimentationCommercialPdvModelPg.findOne({
            where: { id }
        });
    }
}
    