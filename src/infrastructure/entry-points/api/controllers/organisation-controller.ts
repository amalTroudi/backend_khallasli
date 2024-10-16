import { IOrganisationService, ORGANISATION_SERVICE } from "@/domain/use-cases/organisation-service";
import { Adapter, Get, Mapping, Param } from "@tsclean/core";
import {  Router } from 'express'


@Mapping('/organisation')
export class OrganisationController {

    public route: string = '/organisation';
    public router: Router;

    constructor(
        @Adapter(ORGANISATION_SERVICE) private readonly organisationService: IOrganisationService
    ) {
    }

    private initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/organisation', this.organisationController.bind(this));
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