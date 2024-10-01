import { BILL_REPOSITORY, IBillRepository } from "@/domain/entities/contracts/bill-repository";
import { ILeadsRepository, LEADS_REPOSITORY } from "@/domain/entities/contracts/leads-repository";
import { BillModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/bill-pg";
import { leadsModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/leads-pg";
import { Adapter, Service } from "@tsclean/core";
import { IBillService } from "../bill-service";
import { ILeadsService } from "../leads-service";


@Service()
export class LeadsServiceImpl implements ILeadsService {
   
    constructor(
        @Adapter(LEADS_REPOSITORY) private readonly leadsRepository: ILeadsRepository 
    ) {
    }

    async  leadsService(): Promise<leadsModelPg[]> {
        return await this.leadsRepository.leadRepository();
    }  
    async getLeadsById(id: number): Promise<leadsModelPg | null> {
        return await this.leadsRepository.getLeadById(id);
    }
    async getLeadsByIdLead(id_bill: string): Promise<leadsModelPg | null> {
        return await this.leadsRepository.getLeadByIdLead(id_bill);
    }
    async getLeadsByIdUser(id_user: string): Promise<leadsModelPg | null> {
        return await this.leadsRepository.getLeadByIdUser(id_user);
    }
    async getLeadsByIdReport(organisationId: string): Promise<leadsModelPg[]> {
        return await this.leadsRepository.getLeadByIdReport(organisationId);
    }
}