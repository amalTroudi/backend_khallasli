import { OpeerateurModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/operateur-pg";

export const OPERATEUR_REPOSITORY = "OPERATEUR_REPOSITORY";

export interface IOperateurRepository {
    operateurRepository: () => Promise<OpeerateurModelPg[]> , 
    getOperateurById: (id: number) => Promise<OpeerateurModelPg | null>,
    getOperateurByIdOperateur: (id_operateur: string) => Promise<OpeerateurModelPg | null>;
    getOperateurByIdOperateurTopup: (id_operateur_topup: string) => Promise<OpeerateurModelPg | null>;
    getOperateurByLibelle: (libelle: string) => Promise<OpeerateurModelPg[]>;

 

}
export class OperateurRepositoryImpl implements IOperateurRepository{
   
    async operateurRepository(): Promise<OpeerateurModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await OpeerateurModelPg.findAll();
    }   
     //filter par id 
    async getOperateurById(id: number): Promise<OpeerateurModelPg | null> {
        return await OpeerateurModelPg.findOne({
            where: { id }
        });
    }
      //filter par id bill 
      async getOperateurByIdOperateur(id_operateur: string): Promise<OpeerateurModelPg | null> {
        return await OpeerateurModelPg.findOne({
            where: { id_operateur}
        });
    }
      //filter par id user
      async getOperateurByIdOperateurTopup(id_operateur_topup: string): Promise<OpeerateurModelPg | null> {
        return await OpeerateurModelPg.findOne({
            where: { id_operateur_topup}
        });
    }
     //  Filtrer par organizationId
     async getOperateurByLibelle(libelle: string): Promise<OpeerateurModelPg[]> {
        return await OpeerateurModelPg.findAll({
            where: { libelle: libelle }
        });
    }
}