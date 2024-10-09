import { IWalletPdvRepository, WALLET_PDV_REPOSITORY } from "@/domain/entities/contracts/wallet-pdv-repository";
import { WalletPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pdv-pg";
import { WalletModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pg";
import { Adapter, Service } from "@tsclean/core";
import { IWalletPdvService } from "../wallet-pdv-service";


@Service()
export class WalletPdvServiceImpl implements IWalletPdvService {
   
    constructor(
        @Adapter(WALLET_PDV_REPOSITORY) private readonly walletPdvRepository: IWalletPdvRepository 
    ) {
    }

    async  walletPdvService(): Promise<WalletPdvModelPg[]> {
        return await this.walletPdvRepository.walletPdvRepository();
    }
     
     // Nouvelle méthode pour récupérer les enregistrements avec un status donné
     async getWalletPdvByStatus(status: string): Promise<WalletPdvModelPg | null> {
        return await this.walletPdvRepository.getWalletPdvByStatus(status);
    }
    async countWalletPdv(): Promise<number> {
        return await this.walletPdvRepository.countWalletPdv();
    }
    async getWalletPdvById(id: number): Promise<WalletPdvModelPg | null> {
        return await this.walletPdvRepository.getWalletPdvById(id);
    }
    async getWalletByCompany(companyid: string): Promise<WalletPdvModelPg | null> {
        return await this.walletPdvRepository.getWalletPdvByIdCompany(companyid);
    }
    async getWalletPdvByIdWallet(id_wallet: string): Promise<WalletPdvModelPg | null> {
        return await this.walletPdvRepository.getWalletPdvByIdWallet(id_wallet);
    }
    async getWalletByPDv(id_pdv: string): Promise<WalletPdvModelPg | null> {
        return await this.walletPdvRepository.getWalletPdvByIdPdv(id_pdv);
    }
   
}