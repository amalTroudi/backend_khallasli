import { DEMANDE_ALIMENTATION_PDV_REPOSITORY, IDemandeAlimentationPdvRepository } from "@/domain/entities/contracts/demande-alimentation-pdv-repository";
import { DemandeAlimentationPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/demande-alimentation-pdv-pg";
import { Adapter, Service } from "@tsclean/core";
import { IDemandeAlimentationPdvService } from "../demande-alimentation-pdv-service";


@Service()
export class DemandeAlimentationPdvServiceImpl implements IDemandeAlimentationPdvService {
   
    constructor(
        @Adapter(DEMANDE_ALIMENTATION_PDV_REPOSITORY) private readonly demandeAlimentationPdvRepository: IDemandeAlimentationPdvRepository 
    ) {
    }

    async  demandeAlimentationPdvService(): Promise<DemandeAlimentationPdvModelPg[]> {
        return await this.demandeAlimentationPdvRepository.demandeAlimentationPdvRepository();
    }
      //  méthode pour récupérer les données triées par montant ass
      async getDemandeAlimentationPdvSortedByMontantAs(): Promise<DemandeAlimentationPdvModelPg[]> {
        return await this.demandeAlimentationPdvRepository.getDemandeAlimentationPdvSortedByMontantAS();
    }
    async getDemandeAlimentationPdvSortedByMontantDesc(): Promise<DemandeAlimentationPdvModelPg[]> {
        // Appel de la méthode pour récupérer les enregistrements triés en ordre décroissant
        return await this.demandeAlimentationPdvRepository.getDemandeAlimentationPdvSortedByMontantDesc();
    }
     // Nouvelle méthode pour récupérer les enregistrements avec un status donné
     async getDemandeAlimentationPdvByStatus(status: number): Promise<DemandeAlimentationPdvModelPg[]> {
        return await this.demandeAlimentationPdvRepository.getDemandeAlimentationPdvByStatus(status);
    }
    async countDemandeAlimentationPdvByStatus(status: number): Promise<number> {
        return await this.demandeAlimentationPdvRepository.countDemandeAlimentationPdvByStatus(status);
    }
    async getDemandeAlimentationPdvById(id: number): Promise<DemandeAlimentationPdvModelPg | null> {
        return await this.demandeAlimentationPdvRepository.getDemandeAlimentationPdvById(id);
    }
    async getDemandeAlimentationPdvByIdAlimentation(id_alimentation: string): Promise<DemandeAlimentationPdvModelPg | null> {
        return await this.demandeAlimentationPdvRepository.getDemandeAlimentationPdvByIdAlimentation(id_alimentation);
    }
    async getDemandeAlimentationPdvByIdWallet(id_wallet: string): Promise<DemandeAlimentationPdvModelPg | null> {
        return await this.demandeAlimentationPdvRepository.getDemandeAlimentationPdvByIdWallet(id_wallet);
    }
    async getDemandeAlimentationPdvByBank(bank: string): Promise<DemandeAlimentationPdvModelPg | null> {
        return await this.demandeAlimentationPdvRepository.getDemandeAlimentationPdvByBank(bank);
    }
    async getDemandeAlimentationPdvByRef(ref: number): Promise<DemandeAlimentationPdvModelPg | null> {
        return await this.demandeAlimentationPdvRepository.getDemandeAlimentationPdvById(ref);
    }
}