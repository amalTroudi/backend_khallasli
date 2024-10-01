import { ALIMENTATION_COMMERCIAL_PDV_REPOSITORY, IAlimentationCommercialPdvRepository } from "@/domain/entities/contracts/alimentation-commercial-pdv";
import { HISTORY_WALLET_PDV_REPOSITORY, IHistoryWalletPdvRepository } from "@/domain/entities/contracts/history-wallet-pdv-repository";
import { AlimentationCommercialPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-pdv-pg";
import { HistoryWalletPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/history-wallet-pdv-pg";
import { Adapter, Service } from "@tsclean/core";
import { IAlimentationCommercialPdvService } from "../alimentation-commercial-pdv-service";
import { IHistoryWalletPdvService } from "../history-wallet-pdv-service";


@Service()
export class HistoryWalletPdvServiceImpl implements IHistoryWalletPdvService {
   
    constructor(
        @Adapter(HISTORY_WALLET_PDV_REPOSITORY) private readonly historyWalletPdvRepository: IHistoryWalletPdvRepository 
    ) {
    }

    async  historyWalletPdvService(): Promise<HistoryWalletPdvModelPg[]> {
        return await this.historyWalletPdvRepository.historyWalletPdvRepository();
    }
      //  méthode pour récupérer les données triées par montant ass
      async getHistoryWalletPdvSortedByOldAS(): Promise<HistoryWalletPdvModelPg[]> {
        return await this.historyWalletPdvRepository.getHistoryWalletPdvSortedByOldAS();
    }
    async getHistoryWalletPdvSortedByOldDesc(): Promise<HistoryWalletPdvModelPg[]> {
        // Appel de la méthode pour récupérer les enregistrements triés en ordre décroissant
        return await this.historyWalletPdvRepository.getHistoryWalletPdvSortedByOldDesc();
    }
    async getHistoryWalletPdvSortedByNewAS(): Promise<HistoryWalletPdvModelPg[]> {
        return await this.historyWalletPdvRepository.getHistoryWalletPdvSortedByNewAS();
    }
    async getHistoryWalletPdvSortedByNewDesc(): Promise<HistoryWalletPdvModelPg[]> {
        // Appel de la méthode pour récupérer les enregistrements triés en ordre décroissant
        return await this.historyWalletPdvRepository.getHistoryWalletPdvSortedByNewDesc();
    }
    async getHistoryWalletPdvSortedByDebitAS(): Promise<HistoryWalletPdvModelPg[]> {
        return await this.historyWalletPdvRepository.getHistoryWalletPdvSortedByDebitAS();
    }
    async getHistoryWalletPdvSortedByDebitDesc(): Promise<HistoryWalletPdvModelPg[]> {
        // Appel de la méthode pour récupérer les enregistrements triés en ordre décroissant
        return await this.historyWalletPdvRepository.getHistoryWalletPdvSortedByDebitDesc();
    }
    async getHistoryWalletPdvSortedByPuvAS(): Promise<HistoryWalletPdvModelPg[]> {
        return await this.historyWalletPdvRepository.getHistoryWalletPdvSortedByPuvAS();
    }
    async getHistoryWalletPdvSortedByPuvDesc(): Promise<HistoryWalletPdvModelPg[]> {
        // Appel de la méthode pour récupérer les enregistrements triés en ordre décroissant
        return await this.historyWalletPdvRepository.getHistoryWalletPdvSortedByPuvDesc();
    }
     // Nouvelle méthode pour récupérer les enregistrements avec un status donné
     async getHistoryWalletPdvByService(service: string): Promise<HistoryWalletPdvModelPg> {
        return await this.historyWalletPdvRepository.getHistoryWalletPdvByService(service);
    }
    async getHistoryWalletPdvById(id: number): Promise<HistoryWalletPdvModelPg | null> {
        return await this.historyWalletPdvRepository.getHistoryWalletPdvById(id);
    }
    async getHistoryWalletPdvByIdHistory(id_history: string): Promise<HistoryWalletPdvModelPg | null> {
        return await this.historyWalletPdvRepository.getHistoryWalletPdvByIdHistory(id_history);
    }
    async getHistoryWalletPdvByIdWallet(id_wallet: string): Promise<HistoryWalletPdvModelPg | null> {
        return await this.historyWalletPdvRepository.getHistoryWalletPdvByIdWallet(id_wallet);
    }
}