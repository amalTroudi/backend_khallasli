import { BILL_SERVICE, IBillService } from "@/domain/use-cases/bill-service";
import { ILeadsService, LEADS_SERVICE } from "@/domain/use-cases/leads-service";
import { Adapter, Get, Mapping, Param, Query } from "@tsclean/core";


@Mapping('/leads')
export class LeadsController {

    constructor(
        @Adapter(LEADS_SERVICE) private readonly leadService: ILeadsService
    ) {
    }

    @Get("/all")
    // @Auth(["admin", "guest"])
    async leadsController(): Promise<any> {
        return await this.leadService.leadsService();
    }
  
     
    @Get('id/:id')
    async getLeadsById(@Param('id') id: number): Promise<any> {
        return await this.leadService.getLeadsById(id);
    }
    @Get('lead/:id_lead')
    async getLeadsByIdLead(@Param('id_lead') id_lead: string): Promise<any> {
        return await this.leadService.getLeadsByIdLead(id_lead);
    }
    @Get('user/:id_user')
    async getLeadsByIdUser(@Param('id_user') id_user: string ): Promise<any> {
        return await this.leadService.getLeadsByIdUser(id_user);
    }
    @Get('/report/:id_report')
    async getLeadsByIdReport(@Param('id_report') id_report: string): Promise<any> {
        return await this.leadService.getLeadsByIdReport(id_report);
    }
   
}