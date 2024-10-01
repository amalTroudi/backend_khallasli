import { HistoryWalletPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/history-wallet-pdv-pg";

export const HISTORY_WALLET_PDV_REPOSITORY = "HISTORY_WALLET_PDV_REPOSITORY";

export interface IHistoryWalletPdvRepository {
    historyWalletPdvRepository: () => Promise<HistoryWalletPdvModelPg[]> , 
    getHistoryWalletPdvSortedByOldAS: () => Promise<HistoryWalletPdvModelPg[]> , 
    getHistoryWalletPdvSortedByOldDesc: () => Promise<HistoryWalletPdvModelPg[]> ,
    getHistoryWalletPdvSortedByNewAS: () => Promise<HistoryWalletPdvModelPg[]> , 
    getHistoryWalletPdvSortedByNewDesc: () => Promise<HistoryWalletPdvModelPg[]> ,
    getHistoryWalletPdvSortedByDebitAS: () => Promise<HistoryWalletPdvModelPg[]> , 
    getHistoryWalletPdvSortedByDebitDesc: () => Promise<HistoryWalletPdvModelPg[]> ,
    getHistoryWalletPdvSortedByPuvAS: () => Promise<HistoryWalletPdvModelPg[]> , 
    getHistoryWalletPdvSortedByPuvDesc: () => Promise<HistoryWalletPdvModelPg[]> ,
    getHistoryWalletPdvById: (id: number) => Promise<HistoryWalletPdvModelPg | null>;
    getHistoryWalletPdvByIdHistory: (id_history: string) => Promise<HistoryWalletPdvModelPg | null>;
    getHistoryWalletPdvByIdWallet: (id_wallet: string) => Promise<HistoryWalletPdvModelPg | null>;
    getHistoryWalletPdvByService: (service: string) => Promise<HistoryWalletPdvModelPg | null>;


}
export class HistoryWalletPdvRepositoryImpl implements IHistoryWalletPdvRepository{
    async historyWalletPdvRepository(): Promise<HistoryWalletPdvModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await HistoryWalletPdvModelPg.findAll();
    }   

    async getHistoryWalletPdvSortedByOldAS(): Promise<HistoryWalletPdvModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre ascendant
        return await HistoryWalletPdvModelPg.findAll({
            order: [['old_balance', 'ASC']]
        });
    }
    async getHistoryWalletPdvSortedByOldDesc(): Promise<HistoryWalletPdvModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre décroissant
        return await HistoryWalletPdvModelPg.findAll({
            order: [['old_balance', 'DESC']]
        });
    }
    async getHistoryWalletPdvSortedByNewAS(): Promise<HistoryWalletPdvModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre ascendant
        return await HistoryWalletPdvModelPg.findAll({
            order: [['new_balance', 'ASC']]
        });
    }
    async getHistoryWalletPdvSortedByNewDesc(): Promise<HistoryWalletPdvModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre décroissant
        return await HistoryWalletPdvModelPg.findAll({
            order: [['new_balance', 'DESC']]
        });
    }
    async getHistoryWalletPdvSortedByDebitAS(): Promise<HistoryWalletPdvModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre ascendant
        return await HistoryWalletPdvModelPg.findAll({
            order: [['debit', 'ASC']]
        });
    }
    async getHistoryWalletPdvSortedByDebitDesc(): Promise<HistoryWalletPdvModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre décroissant
        return await HistoryWalletPdvModelPg.findAll({
            order: [['debit', 'DESC']]
        });
    }
    async getHistoryWalletPdvSortedByPuvAS(): Promise<HistoryWalletPdvModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre ascendant
        return await HistoryWalletPdvModelPg.findAll({
            order: [['puv', 'ASC']]
        });
    }
    async getHistoryWalletPdvSortedByPuvDesc(): Promise<HistoryWalletPdvModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre décroissant
        return await HistoryWalletPdvModelPg.findAll({
            order: [['puv', 'DESC']]
        });
    }
    
   
    async getHistoryWalletPdvById(id: number): Promise<HistoryWalletPdvModelPg | null> {
        return await HistoryWalletPdvModelPg.findOne({
            where: { id }
        });
    }
    async getHistoryWalletPdvByIdHistory(id_history: string): Promise<HistoryWalletPdvModelPg | null> {
        return await HistoryWalletPdvModelPg.findOne({
            where: { id_history }
        });
    }
    async getHistoryWalletPdvByIdWallet(id_wallet: string): Promise<HistoryWalletPdvModelPg | null> {
        return await HistoryWalletPdvModelPg.findOne({
            where: { id_wallet }
        });
    }
    async  getHistoryWalletPdvByService(service: string): Promise<HistoryWalletPdvModelPg | null> {
        return await HistoryWalletPdvModelPg.findOne({
            where: { service }
        });
    }
}