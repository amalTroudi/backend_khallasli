import { IReportsRepository } from "@/domain/entities/contracts/reports-repository";
import { PdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-pg";
import { ReportsModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/reports-pg";
import { Adapter, Service } from "@tsclean/core";
import { IReportsService, REPORTS_SERVICE } from "../reports-service";


@Service()
export class ReportsServiceImpl implements IReportsService {
   
    constructor(
        @Adapter(REPORTS_SERVICE) private readonly reportsRepository: IReportsRepository 
    ) {
    }

    async  reportsService(): Promise<ReportsModelPg[]> {
        return await this.reportsRepository.getReports();
    }
    async getReportById(id: number): Promise<ReportsModelPg | null> {
        return await this.reportsRepository.getReportById(id);
    }
    async getReportByIdReport(id_report: string): Promise<ReportsModelPg | null> {
        return await this.reportsRepository.getReportByIdReport(id_report);
    }
    async getReporetByIdUser(id_user: string): Promise<ReportsModelPg | null> {
        return await this.reportsRepository.getReportByIdUser(id_user);
    }
    async getReportsByVille(ville: string): Promise<ReportsModelPg[]> {
        return await this.reportsRepository.getReportByVille(ville);
    }
    async getReportByZone(zone: string): Promise<ReportsModelPg[]> {
        return await this.reportsRepository.getReportByZone(zone);
    }
    async getReportByNomBanque(nom_banque: string): Promise<ReportsModelPg[]> {
        return await this.reportsRepository.getReportByNomBanque(nom_banque);
    }
}