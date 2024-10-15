import { AlimentationCommercialPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-pdv-pg";
import { BillModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/bill-pg";
import { PdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-pg";
import { UserModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg";
import { AlimentationCommercialPdvController } from "@/infrastructure/entry-points/api/controllers/alimentation-commercial-pdv-controller";

export const GET_USERS_REPOSITORY = "GET_USERS_REPOSITORY";

export interface IGetUsersRepository {
    getUsersRepository: () => Promise<any>; 
}
export class GetUsersRepositoryImpl implements IGetUsersRepository {
    // async getUsersRepository(): Promise<UserModelPg[]> {
    //     // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
    //     return await UserModelPg.findAll();
    // }
    async getUsersRepository(): Promise<any> {
        const users = await UserModelPg.findAll();
        const pdvs = await PdvModelPg.findAll();
        const bills = await BillModelPg.findAll();
        const alimentation = await AlimentationCommercialPdvModelPg.findAll(); // Par exemple, pour récupérer les PDVs

        return {
            users,
            pdvs,
            bills , 
            alimentation, 
            // Vous pouvez ajouter d'autres types de données ici
        };
    }
}