import { AlimentationCommercialWalletModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-wallet-pg";

export const ALIMENTATION_COMMERCIAL_WALLET_SERVICE = "ALIMENTATION_COMMERCIAL_WALLET_SERVICE";

export interface IAlimentationCommercialWalletService {
    alimentationCommercialWalletService: () => Promise<AlimentationCommercialWalletModelPg[]>,
    getAlimentationCommercialWalletSortedByMontantAs: () => Promise<AlimentationCommercialWalletModelPg[]> , 
    getAlimentationCommercialWalletSortedByMontantDesc: () => Promise<AlimentationCommercialWalletModelPg[]> ,
    getAlimentationCommercialWalletByStatus: (status:number)=>Promise<AlimentationCommercialWalletModelPg[]> , 
    countAlimentationCommercialWalletByStatus: (status: number) => Promise<number> , 
    getAlimentationCommercialWalletById: (id: number) => Promise<AlimentationCommercialWalletModelPg | null>;

}