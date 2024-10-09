import { DEMANDE_ALIMENTATION_PDV_REPOSITORY, IDemandeAlimentationPdvRepository } from "@/domain/entities/contracts/demande-alimentation-pdv-repository";
import { IWalletRepository, WALLET_REPOSITORY } from "@/domain/entities/contracts/wallet-repository";
import { DemandeAlimentationPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/demande-alimentation-pdv-pg";
import { WalletModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pg";
import { Adapter, Service } from "@tsclean/core";
import { IDemandeAlimentationPdvService } from "../demande-alimentation-pdv-service";
import { IWalletService } from "../wallet-service";


@Service()
export class WalletServiceImpl implements IWalletService {
   
    constructor(
        @Adapter(WALLET_REPOSITORY) private readonly walletRepository: IWalletRepository 
    ) {
    }

    async  walletService(): Promise<WalletModelPg[]> {
        return await this.walletRepository.walletRepository();
    }
      //  méthode pour récupérer les données triées par montant ass
      async getWalletSortedByCreditAs(): Promise<WalletModelPg[]> {
        return await this.walletRepository.getWalletSortedByCreditAs();
    }
    async getWalletSortedByCreditDesc(): Promise<WalletModelPg[]> {
        // Appel de la méthode pour récupérer les enregistrements triés en ordre décroissant
        return await this.walletRepository.getWalletSortedByCreditDesc();
    }
     // Nouvelle méthode pour récupérer les enregistrements avec un status donné
     async getWalletByStatus(status: string): Promise<WalletModelPg | null> {
        return await this.walletRepository.getWalletByStatus(status);
    }
    async countWallet(status: string): Promise<number> {
        return await this.walletRepository.countWalletBystatus(status);
    }
    async getWalletById(id: number): Promise<WalletModelPg | null> {
        return await this.walletRepository.getWalletById(id);
    }
    async getWalletByCommercial(id_commercial: string): Promise<WalletModelPg | null> {
        return await this.walletRepository.getWalletByIdCommercial(id_commercial);
    }
    async getWalletByIdWallet(id_wallet: string): Promise<WalletModelPg | null> {
        return await this.walletRepository.getWalletByIdWallet(id_wallet);
    }
   
}