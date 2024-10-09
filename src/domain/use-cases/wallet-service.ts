import { WalletModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pg";

export const WALLET_SERVICE = "WALLET_SERVICE";

export interface IWalletService {
    walletService: () => Promise<WalletModelPg[]>,
    getWalletSortedByCreditAs: () => Promise<WalletModelPg[]> , 
    getWalletSortedByCreditDesc: () => Promise<WalletModelPg[]> ,
    getWalletByStatus: (status:string)=>Promise<WalletModelPg | null> , 
    countWallet: (status: string) => Promise<number> , 
    getWalletById: (id: number) => Promise<WalletModelPg | null>;
    getWalletByIdWallet: (id_wallet: string) => Promise<WalletModelPg | null>;
    getWalletByCommercial: (id_commercial: string) => Promise<WalletModelPg | null>;


}