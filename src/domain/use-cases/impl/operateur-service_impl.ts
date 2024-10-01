import { ILeadsRepository, LEADS_REPOSITORY } from "@/domain/entities/contracts/leads-repository";
import { IOperateurRepository, OPERATEUR_REPOSITORY } from "@/domain/entities/contracts/operateur-repository";
import { leadsModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/leads-pg";
import { OpeerateurModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/operateur-pg";
import { Adapter, Service } from "@tsclean/core";
import { IOperateurService } from "../operateur-service";


@Service()
export class OperateurServiceImpl implements IOperateurService {
   
    constructor(
        @Adapter(OPERATEUR_REPOSITORY) private readonly operateurRepository: IOperateurRepository 
    ) {
    }

    async  operateurService(): Promise<OpeerateurModelPg[]> {
        return await this.operateurRepository.operateurRepository();
    }  
    async getOperateurById(id: number): Promise<OpeerateurModelPg | null> {
        return await this.operateurRepository.getOperateurById(id);
    }
    async getOperateurByIdOperateur(id_operateur: string): Promise<OpeerateurModelPg | null> {
        return await this.operateurRepository.getOperateurByIdOperateur(id_operateur);
    }
    async getOperateurByIdOperateurTopup(id_operateur_topup: string): Promise<OpeerateurModelPg | null> {
        return await this.operateurRepository.getOperateurByIdOperateurTopup(id_operateur_topup);
    }
    async getOperateurByLibelle(libelle: string): Promise<OpeerateurModelPg[]> {
        return await this.operateurRepository.getOperateurByLibelle(libelle);
    }
}