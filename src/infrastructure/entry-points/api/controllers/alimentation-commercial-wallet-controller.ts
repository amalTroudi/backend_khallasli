import { ALIMENTATION_COMMERCIAL_WALLET_SERVICE, IAlimentationCommercialWalletService } from "@/domain/use-cases/alimentation-commercial-wallet-service";
import { Adapter, Get, Mapping, Param, Query } from "@tsclean/core";
import {  Router } from 'express'

@Mapping('/alimentaionCommercialWallet')
export class AlimentationCommercialWalletController {
    public route: string = '/alimentaionCommercialWallet';
    public router: Router;

    constructor(
        @Adapter(ALIMENTATION_COMMERCIAL_WALLET_SERVICE) private readonly alimentationCommercialWalletService: IAlimentationCommercialWalletService
    ) {
    }
    private initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.post('/alimentaionCommercialPdv', this.alimentationCommercialWalletController.bind(this));
    }
    @Get("/all")
    // @Auth(["admin", "guest"])
    async alimentationCommercialWalletController(): Promise<any> {
        return await this.alimentationCommercialWalletService.alimentationCommercialWalletService();
    }
    
    @Get('/sortedByMontantAs')
    async getAlimentationCommercialWalletSortedByMontantAs(): Promise<any> {
        return await this.alimentationCommercialWalletService.getAlimentationCommercialWalletSortedByMontantAs();
    }
    @Get('/desc')
    async getAlimentationCommercialWalletSortedByMontantDesc(): Promise<any> {
        // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
        return await this.alimentationCommercialWalletService.getAlimentationCommercialWalletSortedByMontantDesc();
    }
      // Nouveau point de terminaison pour récupérer les enregistrements où status = 3
      @Get("/:status")
    async getByStatus(@Param("status") status: number): Promise<any> {
        // Ajout d'une vérification pour s'assurer que status est bien défini
        if (status === undefined || status === null) {
            throw new Error("Le paramètre status est manquant ou invalide");
        }

        return await this.alimentationCommercialWalletService.getAlimentationCommercialWalletByStatus(status);
    }

    @Get("/count/:status")
    async countByStatus(@Param("status") status: number): Promise<number> {
        return await this.alimentationCommercialWalletService.countAlimentationCommercialWalletByStatus(status);
    }
    @Get('/:id')
    async getById(@Param('id') id: number): Promise<any> {
        return await this.alimentationCommercialWalletService.getAlimentationCommercialWalletById(id);
    }
   
}