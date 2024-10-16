import { IWalletService, WALLET_SERVICE } from "@/domain/use-cases/wallet-service";
import { Adapter, Get, Mapping, Param } from "@tsclean/core";
import {  Router } from 'express'


@Mapping('/wallet')
export class WalletController {
    public route: string = '/wallet';
    public router: Router;

    constructor(
        @Adapter(WALLET_SERVICE) private readonly walletService: IWalletService
    ) {
    }

    private initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/wallet', this.walletController.bind(this));
    }

    @Get("/all")
    // @Auth(["admin", "guest"])
    async walletController(): Promise<any> {
        return await this.walletService.walletService();
    }
    
    @Get('/Ass')
    async getWalletSortedByCreditAs(): Promise<any> {
        return await this.walletService.getWalletSortedByCreditAs();
    }
    @Get('/desc')
    async getWalletSortedByCreditDesc(): Promise<any> {
        // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
        return await this.walletService.getWalletSortedByCreditDesc();
    }
      // Nouveau point de terminaison pour récupérer les enregistrements où status = 3
      @Get("/:status")
    async getByStatus(@Param("status") status: string): Promise<any> {
        // Ajout d'une vérification pour s'assurer que status est bien défini
        if (status === undefined || status === null) {
            throw new Error("Le paramètre status est manquant ou invalide");
        }

        return await this.walletService.getWalletByStatus(status);
    }

    @Get("/count/:status")
    async countByStatus(@Param("status") status: string): Promise<number> {
        return await this.walletService.countWallet(status);
    }
    @Get('/:id')
    async getById(@Param('id') id: number): Promise<any> {
        return await this.walletService.getWalletById(id);
    }
    @Get('/id_wallet/:id_wallet')
    async getByIdWallet(@Param('id_wallet') id_wallet : string): Promise<any> {
        return await this.walletService.getWalletByIdWallet(id_wallet);
    }
    @Get('/id_commercial/:id_commercial')
    async getByIdCommercial(@Param('id_commercial') id_commercial: string): Promise<any> {
        return await this.walletService.getWalletByCommercial(id_commercial);
    }
   
}