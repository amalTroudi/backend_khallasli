import { BillModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/bill-pg";
import { leadsModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/leads-pg";

export const LEADS_REPOSITORY = "LEADS_REPOSITORY";

export interface ILeadsRepository {
    leadRepository: () => Promise<leadsModelPg[]> , 
    getLeadById: (id: number) => Promise<leadsModelPg | null>,
    getLeadByIdLead: (id_lead: string) => Promise<leadsModelPg | null>;
    getLeadByIdUser: (id_user: string) => Promise<leadsModelPg | null>;
    getLeadByIdReport: (id_report: string) => Promise<leadsModelPg[]>;

 

}
export class LeadsRepositoryImpl implements ILeadsRepository{
   
    async leadRepository(): Promise<leadsModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await leadsModelPg.findAll();
    }   
     //filter par id 
    async getLeadById(id: number): Promise<leadsModelPg | null> {
        return await leadsModelPg.findOne({
            where: { id }
        });
    }
      //filter par id bill 
      async getLeadByIdLead(id_lead: string): Promise<leadsModelPg | null> {
        return await leadsModelPg.findOne({
            where: { id_lead }
        });
    }
      //filter par id user
      async getLeadByIdUser(id_user: string): Promise<leadsModelPg | null> {
        return await leadsModelPg.findOne({
            where: { id_user }
        });
    }
     //  Filtrer par organizationId
     async getLeadByIdReport(id_report: string): Promise<leadsModelPg[]> {
        return await leadsModelPg.findAll({
            where: { id_report: id_report }
        });
    }
}