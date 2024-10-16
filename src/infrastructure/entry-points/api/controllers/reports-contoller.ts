import { IReportsService, REPORTS_SERVICE } from "@/domain/use-cases/reports-service";
import { Adapter, Get, Mapping, Param } from "@tsclean/core";
import {  Router } from 'express'

@Mapping('/reports')
export class ReportsController {

    public route: string = '/reports';
    public router: Router;

    constructor(
        @Adapter(REPORTS_SERVICE) private readonly reportsService: IReportsService
    ) {
    }
    private initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/reports', this.reportsController.bind(this));
    }

    @Get("/all")
    // @Auth(["admin", "guest"])
    async reportsController(): Promise<any> {
        return await this.reportsService.reportsService();
    }
  
     
    @Get('id/:id')
    async getReportsById(@Param('id') id: number): Promise<any> {
        return await this.reportsService.getReportById(id);
    }
    @Get('id_pdv/:id_pdv')
    async getReportsnByIdReport(@Param('id_report') id_report: string): Promise<any> {
        return await this.reportsService.getReportByIdReport(id_report);
    }
    @Get('id_user/:id_user')
    async getReportsByIdUser(@Param('id_user') id_user: string): Promise<any> {
        return await this.reportsService.getReporetByIdUser(id_user);
    }

    @Get('/ville/:ville')
    async getReportsByVille(@Param('ville') ville: string): Promise<any> {
        return await this.reportsService.getReportsByVille(ville);
    }
    @Get('/zone/:zone')
    async getReportsByRegion(@Param('zone') zone: string): Promise<any> {
        return await this.reportsService.getReportByZone(zone);
    }
    @Get('/nom_banque/:nom_banque')
    async getReportsByNomBanque(@Param('nom_banque') nom_banque: string): Promise<any> {
        return await this.reportsService.getReportByNomBanque(nom_banque);
    }
   
}