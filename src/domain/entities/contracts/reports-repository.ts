import { ReportsModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/reports-pg";

export const REPORTS_REPOSITORY = "REPORTS_REPOSITORY";
export interface IReportsRepository {
    getReports(): Promise<ReportsModelPg[]>;
    getReportById(id: number): Promise<ReportsModelPg | null>;
    getReportByIdReport(id_report : string) : Promise<ReportsModelPg | null>;
    getReportByIdUser(id_user : string) : Promise<ReportsModelPg | null>;
    getReportByVille: (ville: string) => Promise<ReportsModelPg[]>;
    getReportByZone: (zone: string) => Promise<ReportsModelPg[]>;
    getReportByNomBanque: (nom_banque: string) => Promise<ReportsModelPg[]>;
}
export class ReportsRepositoryImpl implements IReportsRepository {
    async getReports(): Promise<ReportsModelPg[]>{
        return await ReportsModelPg.findAll();
    }
    async getReportById(id: number): Promise<ReportsModelPg | null> {
        return await ReportsModelPg.findOne({
            where: { id }
        });
    }
    async getReportByIdReport(id_report: string): Promise<ReportsModelPg | null> {
        return await ReportsModelPg.findOne({
            where: { id_report }
        });
    }
    async getReportByIdUser(id_user: string): Promise<ReportsModelPg | null> {
        return await ReportsModelPg.findOne({
            where: { id_user }
        });
    }
    async getReportByVille(ville: string): Promise<ReportsModelPg[]> {
        return await ReportsModelPg.findAll({
            where: { ville: ville }
        });
    }
    async getReportByZone(zone: string): Promise<ReportsModelPg[]> {
        return await ReportsModelPg.findAll({
            where: { zone: zone }
        });
    }
    async getReportByNomBanque(nom_banque: string): Promise<ReportsModelPg[]> {
        return await ReportsModelPg.findAll({
            where: { nom_banque: nom_banque }
        });
    }
}