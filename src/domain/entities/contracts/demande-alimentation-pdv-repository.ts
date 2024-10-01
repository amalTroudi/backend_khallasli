import { DemandeAlimentationPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/demande-alimentation-pdv-pg";

export const DEMANDE_ALIMENTATION_PDV_REPOSITORY = "DEMANDE_ALIMENTATION_PDV_REPOSITORY";

export interface IDemandeAlimentationPdvRepository {
    demandeAlimentationPdvRepository: () => Promise<DemandeAlimentationPdvModelPg[]> , 
    getDemandeAlimentationPdvSortedByMontantAS: () => Promise<DemandeAlimentationPdvModelPg[]> , 
    getDemandeAlimentationPdvSortedByMontantDesc: () => Promise<DemandeAlimentationPdvModelPg[]> ,
    getDemandeAlimentationPdvByStatus: (status: number) => Promise<DemandeAlimentationPdvModelPg[]>, 
    countDemandeAlimentationPdvByStatus: (status: number) => Promise<number> ,
    getDemandeAlimentationPdvById: (id: number) => Promise<DemandeAlimentationPdvModelPg | null>;
    getDemandeAlimentationPdvByIdAlimentation: (id_alimentation: string) => Promise<DemandeAlimentationPdvModelPg | null>;
    getDemandeAlimentationPdvByIdWallet: (id_wallet: string) => Promise<DemandeAlimentationPdvModelPg | null>;
    getDemandeAlimentationPdvByRef: (ref: number) => Promise<DemandeAlimentationPdvModelPg | null>;
    getDemandeAlimentationPdvByBank: (bank: string) => Promise<DemandeAlimentationPdvModelPg | null>;

}
export class DemandeAlimentationPdvRepositoryImpl implements IDemandeAlimentationPdvRepository{
   
    async demandeAlimentationPdvRepository(): Promise<DemandeAlimentationPdvModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await DemandeAlimentationPdvModelPg.findAll();
    }   
    async getDemandeAlimentationPdvSortedByMontantAS(): Promise<DemandeAlimentationPdvModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre ascendant
        return await DemandeAlimentationPdvModelPg.findAll({
            order: [['montant', 'ASC']]
        });
    }
    async getDemandeAlimentationPdvSortedByMontantDesc(): Promise<DemandeAlimentationPdvModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre décroissant
        return await DemandeAlimentationPdvModelPg.findAll({
            order: [['montant', 'DESC']]
        });
    }
    // Nouvelle méthode pour récupérer les enregistrements où status = 3
    async getDemandeAlimentationPdvByStatus(status: number): Promise<DemandeAlimentationPdvModelPg[]> {
        return await DemandeAlimentationPdvModelPg.findAll({
            where: {
                status: status // Filtrer sur le champ status
            }
        });
    }
    async countDemandeAlimentationPdvByStatus(status: number): Promise<number> {
        return await DemandeAlimentationPdvModelPg.count({
            where: { status }
        });
    }
    async getDemandeAlimentationPdvById(id: number): Promise<DemandeAlimentationPdvModelPg | null> {
        return await DemandeAlimentationPdvModelPg.findOne({
            where: { id }
        });
    }
    async getDemandeAlimentationPdvByIdAlimentation(id_alimentation: string): Promise<DemandeAlimentationPdvModelPg | null> {
        return await DemandeAlimentationPdvModelPg.findOne({
            where: { id_alimentation }
        });
    }
    async getDemandeAlimentationPdvByIdWallet(id_wallet: string): Promise<DemandeAlimentationPdvModelPg | null> {
        return await DemandeAlimentationPdvModelPg.findOne({
            where: { id_wallet }
        });
    }
    async  getDemandeAlimentationPdvByBank(bank: string): Promise<DemandeAlimentationPdvModelPg | null> {
        return await DemandeAlimentationPdvModelPg.findOne({
            where: { bank }
        });
    }
    async getDemandeAlimentationPdvByRef(ref: number): Promise<DemandeAlimentationPdvModelPg | null> {
        return await DemandeAlimentationPdvModelPg.findOne({
            where: { ref }
        });
    }
}