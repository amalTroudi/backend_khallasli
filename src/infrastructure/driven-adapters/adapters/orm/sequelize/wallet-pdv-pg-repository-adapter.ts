import { IWalletPdvRepository } from "@/domain/entities/contracts/wallet-pdv-repository";
import { WalletPdvModelPg } from "./models/wallet-pdv-pg";


export class WalletPdvPgRepositoryAdapter implements IWalletPdvRepository {
    async walletPdvRepository(): Promise<WalletPdvModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await WalletPdvModelPg.findAll();
    }   
   
     //filter par id 
    async getWalletPdvById(id: number): Promise<WalletPdvModelPg | null> {
        return await WalletPdvModelPg.findOne({
            where: { id }
        });
    }
      //filter par id wallet
      async getWalletPdvByIdWallet(id_wallet: string): Promise<WalletPdvModelPg | null> {
        return await WalletPdvModelPg.findOne({
            where: { id_wallet }
        });
    }
      //filter par id commercial
      async getWalletPdvByIdCompany(companyid: string): Promise<WalletPdvModelPg | null> {
        return await WalletPdvModelPg.findOne({
            where: { companyid}
        });
    }
    async getWalletPdvByIdPdv(id_pdv: string): Promise<WalletPdvModelPg | null> {
        return await WalletPdvModelPg.findOne({
            where: { id_pdv}
        });
    }
    async getWalletPdvByStatus(status: string): Promise<WalletPdvModelPg | null> {
        return await WalletPdvModelPg.findOne({
            where: { status }
        });
    }
   
    async countWalletPdv(): Promise<number> {
        return await WalletPdvModelPg.count();
    }
   
    
    }

