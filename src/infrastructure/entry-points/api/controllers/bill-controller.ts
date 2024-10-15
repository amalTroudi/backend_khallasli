import { BILL_SERVICE, IBillService } from "@/domain/use-cases/bill-service";
import { Adapter, Get, Mapping, Param, Query } from "@tsclean/core";


@Mapping('/bill')
export class BillController {

    constructor(
        @Adapter(BILL_SERVICE) private readonly billService: IBillService
    ) {
    }

    @Get("/all")
    // @Auth(["admin", "guest"])
    async billController(): Promise<any> {
        return await this.billService.billService();
    }
    
    @Get('/sortedByAmountAs')
    async getBillSortedByAmountAs(): Promise<any> {
        return await this.billService.getBillSortedByAmountAs();
    }
    @Get('/desc')
    async getBillSortedByAmountDesc(): Promise<any> {
        // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
        return await this.billService.getBillSortedByAmountDesc();
    }
     
    @Get('id/:id')
    async getBillById(@Param('id') id: number): Promise<any> {
        return await this.billService.getBillById(id);
    }
    @Get('bill/:id_bill')
    async getBillByIdBill(@Param('id_bill') id_bill: string): Promise<any> {
        return await this.billService.getBillByIdBill(id_bill);
    }
    @Get('user/:id_user')
    async getBillByIdUser(@Param('id_user') id_user: string ): Promise<any> {
        return await this.billService.getBillByIdUser(id_user);
    }
    @Get('/organization/:organisationId')
    async getBillByOrganizationId(@Param('organisationId') organisationId: string): Promise<any> {
        return await this.billService.getBillByOrganizationId(organisationId);
    }
   
}