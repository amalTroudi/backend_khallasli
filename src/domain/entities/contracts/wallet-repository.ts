import { WalletModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pg";

export const WALLET_REPOSITORY = "WALLET_REPOSITORY";

export interface IWalletRepository {
    walletRepository: () => Promise<WalletModelPg[]> , 
    getWalletById: (id: number) => Promise<WalletModelPg | null>,
    getWalletByIdWallet: (id_wallet: string) => Promise<WalletModelPg | null>;
    getWalletByIdCommercial: (id_commercial: string) => Promise<WalletModelPg | null>;
    getWalletByStatus: (status: string) => Promise<WalletModelPg | null>;
    getWalletSortedByCreditAs: () => Promise<WalletModelPg[]> , 
    getWalletSortedByCreditDesc: () => Promise<WalletModelPg[]> ,
    countWalletBystatus:(status :string)=> Promise<number>
    
}
export class WalletRepositoryImpl implements IWalletRepository{
   
    async walletRepository(): Promise<WalletModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await WalletModelPg.findAll();
    }   
   
     //filter par id 
    async getWalletById(id: number): Promise<WalletModelPg | null> {
        return await WalletModelPg.findOne({
            where: { id }
        });
    }
      //filter par id wallet
      async getWalletByIdWallet(id_wallet: string): Promise<WalletModelPg | null> {
        return await WalletModelPg.findOne({
            where: { id_wallet }
        });
    }
      //filter par id commercial
      async getWalletByIdCommercial(id_commercial: string): Promise<WalletModelPg | null> {
        return await WalletModelPg.findOne({
            where: { id_commercial}
        });
    }
    async getWalletByStatus(status: string): Promise<WalletModelPg | null> {
        return await WalletModelPg.findOne({
            where: { status }
        });
    }
    async getWalletSortedByCreditAs(): Promise<WalletModelPg[]> {
        return await WalletModelPg.findAll({
            order: [['credit_commercial', 'ASC']], // Tri par montant en ordre ascendant
        });
    }
    async getWalletSortedByCreditDesc(): Promise<WalletModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre décroissant
        return await WalletModelPg.findAll({
            order: [['credit_commercial', 'DESC']]
        });
    }
    async countWalletBystatus(status: string): Promise<number> {
        return await WalletModelPg.count({
            where: { status }
        });
    }
   
}