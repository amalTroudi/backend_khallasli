import { ILeadsService, LEADS_SERVICE } from "@/domain/use-cases/leads-service";
import { IOperateurService, OPERATEUR_SERVICE } from "@/domain/use-cases/operateur-service";
import { Adapter, Get, Mapping, Param } from "@tsclean/core";


@Mapping('/operateur')
export class OperateurController {

    constructor(
        @Adapter(OPERATEUR_SERVICE) private readonly operateurService: IOperateurService
    ) {
    }

    @Get("/all")
    // @Auth(["admin", "guest"])
    async leadsController(): Promise<any> {
        return await this.operateurService.operateurService();
    }
  
     
    @Get('id/:id')
    async getOperateurById(@Param('id') id: number): Promise<any> {
        return await this.operateurService.getOperateurById(id);
    }
    @Get('id_operateur/:id_operateur')
    async getOperateurByIdOperateur(@Param('id_operateur') id_operateur: string): Promise<any> {
        return await this.operateurService.getOperateurByIdOperateur(id_operateur);
    }
    @Get('topup/:id_operateur_topup')
    async getOperateurByIdOperateurTopup(@Param('id_operateur_topup') id_operateur_topup: string ): Promise<any> {
        return await this.operateurService.getOperateurByIdOperateurTopup(id_operateur_topup);
    }
    @Get('/libelle/:libelle')
    async getOperateurByLibelle(@Param('libelle') libelle: string): Promise<any> {
        return await this.operateurService.getOperateurByLibelle(libelle);
    }
   
}