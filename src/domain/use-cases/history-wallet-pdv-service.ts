import { HistoryWalletPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/history-wallet-pdv-pg";

export const HISTORY_WALLET_PDV_SERVICE = "HISTORY_WALLET_PDV_SERVICE";

export interface IHistoryWalletPdvService { 
    historyWalletPdvService: () => Promise<HistoryWalletPdvModelPg[]> , 
    getHistoryWalletPdvSortedByOldAS: () => Promise<HistoryWalletPdvModelPg[]> , 
    getHistoryWalletPdvSortedByOldDesc: () => Promise<HistoryWalletPdvModelPg[]> ,
    getHistoryWalletPdvSortedByNewAS: () => Promise<HistoryWalletPdvModelPg[]> , 
    getHistoryWalletPdvSortedByNewDesc: () => Promise<HistoryWalletPdvModelPg[]> ,
    getHistoryWalletPdvSortedByDebitAS: () => Promise<HistoryWalletPdvModelPg[]> , 
    getHistoryWalletPdvSortedByDebitDesc: () => Promise<HistoryWalletPdvModelPg[]> ,
    getHistoryWalletPdvSortedByPuvAS: () => Promise<HistoryWalletPdvModelPg[]> , 
    getHistoryWalletPdvSortedByPuvDesc: () => Promise<HistoryWalletPdvModelPg[]> ,
    getHistoryWalletPdvById: (id: number) => Promise<HistoryWalletPdvModelPg | null>;
    getHistoryWalletPdvByIdHistory: (id_history: string) => Promise<HistoryWalletPdvModelPg | null>;
    getHistoryWalletPdvByIdWallet: (id_wallet: string) => Promise<HistoryWalletPdvModelPg | null>;
    getHistoryWalletPdvByService: (service: string) => Promise<HistoryWalletPdvModelPg | null>;

}