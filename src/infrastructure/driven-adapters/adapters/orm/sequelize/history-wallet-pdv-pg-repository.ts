import { IHistoryWalletPdvRepository } from "@/domain/entities/contracts/history-wallet-pdv-repository";
import { HistoryWalletPdvModelPg } from "./models/history-wallet-pdv-pg";

export class HistoryWalletPdvPgRepositoryAdapter implements IHistoryWalletPdvRepository {

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
