import { HISTORY_WALLET_PDV_SERVICE, IHistoryWalletPdvService } from "@/domain/use-cases/history-wallet-pdv-service";
import { Adapter, Get, Mapping, Param, Query } from "@tsclean/core";


@Mapping('/historyWalletPdv')
export class HistoryWalletPdvController {

    constructor(
        @Adapter(HISTORY_WALLET_PDV_SERVICE) private readonly historyWalletPdvService: IHistoryWalletPdvService
    ) {
    }

    @Get("/all")
    // @Auth(["admin", "guest"])
    async historyWalletPdvController(): Promise<any> {
        return await this.historyWalletPdvService.historyWalletPdvService();
    }
    
    @Get('/oldAs')
    async getHistoryWalletPdvSortedByOldAs(): Promise<any> {
        return await this.historyWalletPdvService.getHistoryWalletPdvSortedByOldAS();
    }
    @Get('/descOld')
    async getHistoryWalletPdvSortedByOldDesc(): Promise<any> {
        // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
        return await this.historyWalletPdvService.getHistoryWalletPdvSortedByOldDesc();
    }
    @Get('/newAs')
    async getHistoryWalletPdvSortedByNewAs(): Promise<any> {
        return await this.historyWalletPdvService.getHistoryWalletPdvSortedByNewAS();
    }
    @Get('/descNew')
    async getHistoryWalletPdvSortedByNewDesc(): Promise<any> {
        // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
        return await this.historyWalletPdvService.getHistoryWalletPdvSortedByNewDesc();
    }
    @Get('/debitAs')
    async getHistoryWalletPdvSortedByDebitAs(): Promise<any> {
        return await this.historyWalletPdvService.getHistoryWalletPdvSortedByDebitAS();
    }
    @Get('/descDebit')
    async getHistoryWalletPdvSortedByMontantDesc(): Promise<any> {
        // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
        return await this.historyWalletPdvService.getHistoryWalletPdvSortedByDebitDesc();
    }
    @Get('/PuvAs')
    async getHistoryWalletPdvSortedByPuvtAs(): Promise<any> {
        return await this.historyWalletPdvService.getHistoryWalletPdvSortedByPuvAS();
    }
    @Get('/descPuv')
    async getHistoryWalletPdvSortedByPuvDesc(): Promise<any> {
        // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
        return await this.historyWalletPdvService.getHistoryWalletPdvSortedByPuvDesc();
    }
      // Nouveau point de terminaison pour récupérer les enregistrements où status = 3

   
    @Get('/:id')
    async getById(@Param('id') id: number): Promise<any> {
        return await this.historyWalletPdvService.getHistoryWalletPdvById(id);
    }
    @Get('/id_history/:id_history')
    async getByIdHistory(@Param('id_history') id_history: string): Promise<any> {
        return await this.historyWalletPdvService.getHistoryWalletPdvByIdHistory(id_history);
    }
    @Get('/id_wallet/:id_wallet')
    async getByIdWallet(@Param('id_wallet') id_wallet: string): Promise<any> {
        return await this.historyWalletPdvService.getHistoryWalletPdvByIdWallet(id_wallet);
    }
    
    @Get('/service/:service')
    async getByService(@Param('service') service: string): Promise<any> {
        return await this.historyWalletPdvService.getHistoryWalletPdvByService(service);
    }
}