import { ACTIVITE_SERVICE, IActiviteService } from "@/domain/use-cases/activite-service";
import { ALIMENTATION_COMMERCIAL_PDV_SERVICE, IAlimentationCommercialPdvService } from "@/domain/use-cases/alimentation-commercial-pdv-service";
import { IWalletPdvService, WALLET_PDV_SERVICE } from "@/domain/use-cases/wallet-pdv-service";
import { IWalletService, WALLET_SERVICE } from "@/domain/use-cases/wallet-service";
import { Adapter, Get, Mapping, Param, Query } from "@tsclean/core";


@Mapping('/walletPdv')
export class WalletPdvController {

    constructor(
        @Adapter(WALLET_PDV_SERVICE) private readonly walletPdvService: IWalletPdvService
    ) {
    }

    @Get("/all")
    // @Auth(["admin", "guest"])
    async pdvController(): Promise<any> {
        return await this.walletPdvService.walletPdvService();
    }
    
      // Nouveau point de terminaison pour récupérer les enregistrements où status = 3
      @Get("/:status")
    async getByStatus(@Param("status") status: string): Promise<any> {
        // Ajout d'une vérification pour s'assurer que status est bien défini
        if (status === undefined || status === null) {
            throw new Error("Le paramètre status est manquant ou invalide");
        }

        return await this.walletPdvService.getWalletPdvByStatus(status);
    }

    @Get("/count/:status")
    async countByStatus(@Param("status") status: string): Promise<number> {
        return await this.walletPdvService.countWalletPdv(status);
    }
    @Get('/:id')
    async getById(@Param('id') id: number): Promise<any> {
        return await this.walletPdvService.getWalletPdvById(id);
    }
    @Get('/id_wallet/:id_wallet')
    async getByIdWallet(@Param('id_wallet') id_wallet : string): Promise<any> {
        return await this.walletPdvService.getWalletPdvByIdWallet(id_wallet);
    }
    @Get('/companyId/:companyId')
    async getByIdCommercial(@Param('companyId') companyId: string): Promise<any> {
        return await this.walletPdvService.getWalletByCompany(companyId);
    }
    @Get('/id_pdv/:id_pdv')
    async getByIdPdv(@Param('id_pdv') id_pdv: string): Promise<any> {
        return await this.walletPdvService.getWalletByPDv(id_pdv);
    }
   
}