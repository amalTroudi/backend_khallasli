import { PdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-pg";
import { ReportsModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/reports-pg";

export const REPORTS_SERVICE = "REPORTS_SERVICE";

export interface IReportsService {
    reportsService: () => Promise<ReportsModelPg[]>,
    getReportById: (id: number) => Promise<ReportsModelPg | null>;
    getReportByIdReport: (id_report: string) => Promise<ReportsModelPg | null>;
    getReporetByIdUser: (id_user: string) => Promise<ReportsModelPg | null>;
    getReportsByVille :(ville: string)=> Promise<ReportsModelPg[]> ; 
    getReportByZone :(zone: string)=> Promise<ReportsModelPg[]>
    getReportByNomBanque :(nom_banque: string)=> Promise<ReportsModelPg[]>


}