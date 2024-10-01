import { leadsModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/leads-pg";

export const LEADS_SERVICE = "LEADS_SERVICE";

export interface ILeadsService {
    leadsService: () => Promise<leadsModelPg[]>,
    getLeadsById: (id: number) => Promise<leadsModelPg | null>;
    getLeadsByIdLead: (id_bill: string) => Promise<leadsModelPg | null>;
    getLeadsByIdUser: (id_user: string) => Promise<leadsModelPg | null>;
    getLeadsByIdReport :(id_report: string)=> Promise<leadsModelPg[]>

}