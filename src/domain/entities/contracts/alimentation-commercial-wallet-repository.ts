import { ActiviteModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/activite-pg";
import { AlimentationCommercialPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-pdv-pg";
import { AlimentationCommercialWalletModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-wallet-pg";

export const ALIMENTATION_COMMERCIAL_WALLET_REPOSITORY = "ALIMENTATION_COMMERCIAL_WALLET_REPOSITORY";

export interface IAlimentationCommercialWalletRepository {
    alimentationCommercialWalletRepository: () => Promise<AlimentationCommercialWalletModelPg[]> , 
    getAlimentationCommercialWalletSortedByMontantAS: () => Promise<AlimentationCommercialWalletModelPg[]> , 
    getAlimentationCommercialWalletSortedByMontantDesc: () => Promise<AlimentationCommercialWalletModelPg[]> ,
    getAlimentationCommercialWalletByStatus: (status: number) => Promise<AlimentationCommercialWalletModelPg[]>, 
    countAlimentationCommercialWalletByStatus: (status: number) => Promise<number> ,
    getAlimentationCommercialWalletById: (id: number) => Promise<AlimentationCommercialWalletModelPg | null>;
 

}
export class AlimentationCommercialWalletRepositoryImpl implements IAlimentationCommercialWalletRepository{
   
    async alimentationCommercialWalletRepository(): Promise<AlimentationCommercialWalletModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await AlimentationCommercialWalletModelPg.findAll();
    }   
    async getAlimentationCommercialWalletSortedByMontantAS(): Promise<AlimentationCommercialWalletModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre ascendant
        return await AlimentationCommercialWalletModelPg.findAll({
            order: [['montant', 'ASC']]
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
                status: status // Filtrer sur le champ status
            }
        });
    }
    async countAlimentationCommercialWalletByStatus(status: number): Promise<number> {
        return await AlimentationCommercialWalletModelPg.count({
            where: { status }
        });
    }
    async getAlimentationCommercialWalletById(id: number): Promise<AlimentationCommercialWalletModelPg | null> {
        return await AlimentationCommercialWalletModelPg.findOne({
            where: { id }
        });
    }
}