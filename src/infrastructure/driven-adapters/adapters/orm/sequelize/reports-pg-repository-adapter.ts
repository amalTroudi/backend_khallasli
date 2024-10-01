import { IReportsRepository } from "@/domain/entities/contracts/reports-repository";
import { ReportsModelPg } from "./models/reports-pg";

export class ReportsPgRepositoryAdapter implements IReportsRepository {
    
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