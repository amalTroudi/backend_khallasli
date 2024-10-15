import { IOrganisationService, ORGANISATION_SERVICE } from "@/domain/use-cases/organisation-service";
import { Adapter, Get, Mapping, Param } from "@tsclean/core";


@Mapping('/organisation')
export class OrganisationController {

    constructor(
        @Adapter(ORGANISATION_SERVICE) private readonly organisationService: IOrganisationService
    ) {
    }

    @Get("/all")
    // @Auth(["admin", "guest"])
    async organisationController(): Promise<any> {
        return await this.organisationService.organisationService();
    }
  
     
    @Get('id/:id')
    async getOrganisationById(@Param('id') id: number): Promise<any> {
        return await this.organisationService.getOrganisationById(id);
    }
    @Get('id_organisation/:id_organisation')
    async getOrganisationByIdOperateur(@Param('id_operateur') id_operateur: string): Promise<any> {
        return await this.organisationService.getOrganisationByIdOrganisation(id_operateur);
    }
    
   
    @Get('/libelle/:libelle')
    async getOrganisationByLibelle(@Param('libelle') libelle: string): Promise<any> {
        return await this.organisationService.getOrganisationByLibelle(libelle);
    }
   
}