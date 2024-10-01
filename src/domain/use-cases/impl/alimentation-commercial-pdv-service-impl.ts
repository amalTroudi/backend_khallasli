import { ALIMENTATION_COMMERCIAL_PDV_REPOSITORY, IAlimentationCommercialPdvRepository } from "@/domain/entities/contracts/alimentation-commercial-pdv";
import { AlimentationCommercialPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-pdv-pg";
import { Adapter, Service } from "@tsclean/core";
import { IAlimentationCommercialPdvService } from "../alimentation-commercial-pdv-service";


@Service()
export class AlimentationCommercialPdvServiceImpl implements IAlimentationCommercialPdvService {
   
    constructor(
        @Adapter(ALIMENTATION_COMMERCIAL_PDV_REPOSITORY) private readonly alimentationCommercialPdvRepository: IAlimentationCommercialPdvRepository 
    ) {
    }

    async  alimentationCommercialPdvService(): Promise<AlimentationCommercialPdvModelPg[]> {
        return await this.alimentationCommercialPdvRepository.alimentationCommercialPdvRepository();
    }
      //  méthode pour récupérer les données triées par montant ass
      async getAlimentationCommercialPdvSortedByMontantAs(): Promise<AlimentationCommercialPdvModelPg[]> {
        return await this.alimentationCommercialPdvRepository.getAlimentationCommercialPdvSortedByMontantAS();
    }
    async getAlimentationCommercialPdvSortedByMontantDesc(): Promise<AlimentationCommercialPdvModelPg[]> {
        // Appel de la méthode pour récupérer les enregistrements triés en ordre décroissant
        return await this.alimentationCommercialPdvRepository.getAlimentationCommercialPdvSortedByMontantDesc();
    }
     // Nouvelle méthode pour récupérer les enregistrements avec un status donné
     async getAlimentationCommercialPdvByStatus(status: number): Promise<AlimentationCommercialPdvModelPg[]> {
        return await this.alimentationCommercialPdvRepository.getAlimentationCommercialPdvByStatus(status);
    }
    async countAlimentationCommercialPdvByStatus(status: number): Promise<number> {
        return await this.alimentationCommercialPdvRepository.countAlimentationCommercialPdvByStatus(status);
    }
    async getAlimentationCommercialPdvById(id: number): Promise<AlimentationCommercialPdvModelPg | null> {
        return await this.alimentationCommercialPdvRepository.getAlimentationCommercialPdvById(id);
    }
}