import { IAlimentationCommercialWalletRepository } from "@/domain/entities/contracts/alimentation-commercial-wallet-repository";
import { AlimentationCommercialWalletModelPg } from "./models/alimentation-commercial-wallet-pg";

export class AlimentationCommercialWalletPgRepositoryAdapter implements IAlimentationCommercialWalletRepository {
        
    async  alimentationCommercialWalletRepository(): Promise<AlimentationCommercialWalletModelPg[]>{
        return await AlimentationCommercialWalletModelPg.findAll({
            attributes: { exclude: ['password'] } // Exclure le champ password
        });
    }
     //  méthode pour récupérer les données triées par montant ass
     async getAlimentationCommercialWalletSortedByMontantAS(): Promise<AlimentationCommercialWalletModelPg[]> {
        return await AlimentationCommercialWalletModelPg.findAll({
            order: [['montant', 'ASC']], // Tri par montant en ordre ascendant
        });
    }
    async getAlimentationCommercialWalletSortedByMontantDesc(): Promise<AlimentationCommercialWalletModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre décroissant
        return await AlimentationCommercialWalletModelPg.findAll({
            order: [['montant', 'DESC']]
        });
    }
     // Nouvelle méthode pour récupérer les enregistrements où status = 3
     async getAlimentationCommercialWalletByStatus(status: number): Promise<AlimentationCommercialWalletModelPg[]> {
        return await AlimentationCommercialWalletModelPg.findAll({
            where: {
                status: status // Filtre sur le status
            }
        });
    }
    async countAlimentationCommercialWalletByStatus(status: number): Promise<number> {
        return await AlimentationCommercialWalletModelPg.count({
            where: { status: status }
        });
    }
    async getAlimentationCommercialWalletById(id: number): Promise<AlimentationCommercialWalletModelPg | null> {
        return await AlimentationCommercialWalletModelPg.findOne({
            where: { id }
        });
    }
}
    