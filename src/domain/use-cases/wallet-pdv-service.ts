import { WalletPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pdv-pg";
import { WalletModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pg";

export const WALLET_PDV_SERVICE = "WALLET_PDV_SERVICE";

export interface IWalletPdvService {
    walletPdvService: () => Promise<WalletPdvModelPg[]>,
    getWalletPdvByStatus: (status:string)=>Promise<WalletPdvModelPg | null> , 
    countWalletPdv: (status: string) => Promise<number> , 
    getWalletPdvById: (id: number) => Promise<WalletPdvModelPg | null>;
    getWalletPdvByIdWallet: (id_wallet: string) => Promise<WalletPdvModelPg | null>;
    getWalletByCompany: (companyid: string) => Promise<WalletPdvModelPg | null>;
    getWalletByPDv: (id_pdv: string) => Promise<WalletPdvModelPg | null>;


}