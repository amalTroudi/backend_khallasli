import { ALIMENTATION_COMMERCIAL_WALLET_REPOSITORY, IAlimentationCommercialWalletRepository } from "@/domain/entities/contracts/alimentation-commercial-wallet-repository";
import { AlimentationCommercialWalletModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-wallet-pg";
import { Adapter, Service } from "@tsclean/core";
import { IAlimentationCommercialWalletService } from "../alimentation-commercial-wallet-service";


@Service()
export class AlimentationCommercialWalletServiceImpl implements IAlimentationCommercialWalletService {
   
    constructor(
        @Adapter(ALIMENTATION_COMMERCIAL_WALLET_REPOSITORY) private readonly alimentationCommercialWalletRepository: IAlimentationCommercialWalletRepository 
    ) {
    }

    async  alimentationCommercialWalletService(): Promise<AlimentationCommercialWalletModelPg[]> {
        return await this.alimentationCommercialWalletRepository.alimentationCommercialWalletRepository();
    }
      //  méthode pour récupérer les données triées par montant ass
      async getAlimentationCommercialWalletSortedByMontantAs(): Promise<AlimentationCommercialWalletModelPg[]> {
        return await this.alimentationCommercialWalletRepository.getAlimentationCommercialWalletSortedByMontantAS();
    }
    async getAlimentationCommercialWalletSortedByMontantDesc(): Promise<AlimentationCommercialWalletModelPg[]> {
        // Appel de la méthode pour récupérer les enregistrements triés en ordre décroissant
        return await this.alimentationCommercialWalletRepository.getAlimentationCommercialWalletSortedByMontantDesc();
    }
     // Nouvelle méthode pour récupérer les enregistrements avec un status donné
     async getAlimentationCommercialWalletByStatus(status: number): Promise<AlimentationCommercialWalletModelPg[]> {
        return await this.alimentationCommercialWalletRepository.getAlimentationCommercialWalletByStatus(status);
    }
    async countAlimentationCommercialWalletByStatus(status: number): Promise<number> {
        return await this.alimentationCommercialWalletRepository.countAlimentationCommercialWalletByStatus(status);
    }
    async getAlimentationCommercialWalletById(id: number): Promise<AlimentationCommercialWalletModelPg | null> {
        return await this.alimentationCommercialWalletRepository.getAlimentationCommercialWalletById(id);
    }
}