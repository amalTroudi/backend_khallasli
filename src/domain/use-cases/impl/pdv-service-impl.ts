import { BILL_REPOSITORY, IBillRepository } from "@/domain/entities/contracts/bill-repository";
import { IPdvRepository, PDV_REPOSITORY } from "@/domain/entities/contracts/pdv-repository";
import { BillModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/bill-pg";
import { PdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-pg";
import { Adapter, Service } from "@tsclean/core";
import { IBillService } from "../bill-service";
import { IPdvService } from "../pdv-service";


@Service()
export class PdvServiceImpl implements IPdvService {
   
    constructor(
        @Adapter(PDV_REPOSITORY) private readonly pdvRepository: IPdvRepository 
    ) {
    }

    async  pdvService(): Promise<PdvModelPg[]> {
        return await this.pdvRepository.pdvRepository();
    }
    async getPdvById(id: number): Promise<PdvModelPg | null> {
        return await this.pdvRepository.getPdvById(id);
    }
    async getPdvByIdPdv(id_pdv: string): Promise<PdvModelPg | null> {
        return await this.pdvRepository.getPdvByIdPdv(id_pdv);
    }
    async getPdvByIdCommercial(id_commercial: string): Promise<PdvModelPg | null> {
        return await this.pdvRepository.getPdvByIdCommercial(id_commercial);
    }
    async getPdvByIdCategorie(id_categorie: string): Promise<PdvModelPg | null> {
        return await this.pdvRepository.getPdvByIdCategorie(id_categorie);
    }
    async getPdvByVille(ville: string): Promise<PdvModelPg[]> {
        return await this.pdvRepository.getPdvByVille(ville);
    }
    async getPdvByRegion(region: string): Promise<PdvModelPg[]> {
        return await this.pdvRepository.getPdvByRegion(region);
    }
    async getPdvByCodeComptable(code_comptable: number): Promise<PdvModelPg[]> {
        return await this.pdvRepository.getPdvByCodeComptable(code_comptable);
    }
}