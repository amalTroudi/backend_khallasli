import { IOperateurRepository } from "@/domain/entities/contracts/operateur-repository";
import { OpeerateurModelPg } from "./models/operateur-pg";

export class OperateurPgRepositoryAdapter implements IOperateurRepository {
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