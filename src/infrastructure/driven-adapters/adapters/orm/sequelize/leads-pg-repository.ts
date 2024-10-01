import { ILeadsRepository } from "@/domain/entities/contracts/leads-repository";
import { leadsModelPg } from "./models/leads-pg";

export class LeadPgRepositoryAdapter implements ILeadsRepository { 
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
      //filter par id lead 
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