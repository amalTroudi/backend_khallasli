import { IOperateurService, OPERATEUR_SERVICE } from "@/domain/use-cases/operateur-service";
import { Adapter, Get, Mapping, Param } from "@tsclean/core";
import {  Router } from 'express'


@Mapping('/operateur')
export class OperateurController {

    public route: string = '/operateur';
    public router: Router;

    constructor(
        @Adapter(OPERATEUR_SERVICE) private readonly operateurService: IOperateurService
    ) {
    }

    private initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/operateur', this.operateurController.bind(this));
    }

    @Get("/all")
    // @Auth(["admin", "guest"])
    async operateurController(): Promise<any> {
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