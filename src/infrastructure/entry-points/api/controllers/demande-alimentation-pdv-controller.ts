import { DEMANDE_ALIMENTATION_PDV_SERVICE, IDemandeAlimentationPdvService } from "@/domain/use-cases/demande-alimentation-pdv-service";
import { Adapter, Get, Mapping, Param, Query } from "@tsclean/core";
import {  Router } from 'express'

@Mapping('/demandeAlimentaionPdv')
export class DemandeAlimentationPdvController {

    public route: string = '/demandeAlimentaionPdv';
    public router: Router;

    constructor(
        @Adapter(DEMANDE_ALIMENTATION_PDV_SERVICE) private readonly demandeAlimentationPdvService: IDemandeAlimentationPdvService
    ) {
    }
    private initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/demandeAlimentaionPdv', this.demaandeAlimentationPdvController.bind(this));
    }

    @Get("/all")
    // @Auth(["admin", "guest"])
    async demaandeAlimentationPdvController(): Promise<any> {
        return await this.demandeAlimentationPdvService.demandeAlimentationPdvService();
    }
    
    @Get('/sortedByMontantAs')
    async getAlimentationCommercialPdvSortedByMontantAs(): Promise<any> {
        return await this.demandeAlimentationPdvService.getDemandeAlimentationPdvSortedByMontantAs();
    }
    @Get('/desc')
    async getAlimentationCommercialPdvSortedByMontantDesc(): Promise<any> {
        // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
        return await this.demandeAlimentationPdvService.getDemandeAlimentationPdvSortedByMontantDesc();
    }
      // Nouveau point de terminaison pour récupérer les enregistrements où status = 3
      @Get("/:status")
    async getByStatus(@Param("status") status: number): Promise<any> {
        // Ajout d'une vérification pour s'assurer que status est bien défini
        if (status === undefined || status === null) {
            throw new Error("Le paramètre status est manquant ou invalide");
        }

        return await this.demandeAlimentationPdvService.getDemandeAlimentationPdvByStatus(status);
    }

    @Get("/count/:status")
    async countByStatus(@Param("status") status: number): Promise<number> {
        return await this.demandeAlimentationPdvService.countDemandeAlimentationPdvByStatus(status);
    }
    @Get('/:id')
    async getById(@Param('id') id: number): Promise<any> {
        return await this.demandeAlimentationPdvService.getDemandeAlimentationPdvById(id);
    }
    @Get('/id_alimentation/:id_Alimentation')
    async getByIdAlimentation(@Param('id_alimentation') id_alimentation: string): Promise<any> {
        return await this.demandeAlimentationPdvService.getDemandeAlimentationPdvByIdAlimentation(id_alimentation);
    }
    @Get('/id_wallet/:id_wallet')
    async getByIdWallet(@Param('id_wallet') id_wallet: string): Promise<any> {
        return await this.demandeAlimentationPdvService.getDemandeAlimentationPdvByIdWallet(id_wallet);
    }
    @Get('/ref/:ref')
    async getByRef(@Param('ref') ref: number): Promise<any> {
        return await this.demandeAlimentationPdvService.getDemandeAlimentationPdvByRef(ref);
    }
    @Get('/bank/:bank')
    async getByBank(@Param('bank') bank: string): Promise<any> {
        return await this.demandeAlimentationPdvService.getDemandeAlimentationPdvByBank(bank);
    }
}