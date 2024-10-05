import { IPdvRepository } from "@/domain/entities/contracts/pdv-repository";
import { PdvEntity, PdvParams } from "@/domain/entities/pdv";
import { PdvModelPg } from "./models/pdv-pg";

export class PdvPgRepositoryAdapter implements IPdvRepository {

    map(data: any): any {
        const { id, name, email, password, role } = data;
        return Object.assign({}, { id: id.toString(), name , email, password, role });
    }
    
    async pdvRepository(): Promise<PdvModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await PdvModelPg.findAll();
    }   
   
     //filter par id 
    async getPdvById(id: number): Promise<PdvModelPg | null> {
        return await PdvModelPg.findOne({
            where: { id }
        });
    }
      //filter par id bill 
      async getPdvByIdPdv(id_bill: string): Promise<PdvModelPg | null> {
        return await PdvModelPg.findOne({
            where: { id_bill }
        });
    }
      //filter par id user
      async getPdvByIdCommercial(id_commercial: string): Promise<PdvModelPg | null> {
        return await PdvModelPg.findOne({
            where: { id_commercial}
        });
    }
    async getPdvByIdCategorie(id_categorie: string): Promise<PdvModelPg | null> {
        return await PdvModelPg.findOne({
            where: { id_categorie}
        });
    }
     //  Filtrer par organizationId
     async getPdvByVille(ville: string): Promise<PdvModelPg[]> {
        return await PdvModelPg.findAll({
            where: { ville: ville }
        });
    }
    async getPdvByRegion(region: string): Promise<PdvModelPg[]> {
        return await PdvModelPg.findAll({
            where: { region: region }
        });
    }
    async getPdvByCodeComptable(code_comptable: number): Promise<PdvModelPg[]> {
        return await PdvModelPg.findAll({
            where: { code_comptable: code_comptable }
        });
    }
    async addPdvRepository(data: PdvParams): Promise<PdvModelPg> {
        return await PdvModelPg.create(data);
     }
     async deletePdvRepository(id: string | number): Promise<void> {
        const pdv = await PdvModelPg.findByPk(id);
        if (!pdv) {
            throw new Error(`User with id ${id} not found`);
        }
        await pdv.destroy();
    }
     //  mise à jour d'un utilisateur
     async updatePdvRepository(id: string | number, data: Partial<PdvParams>): Promise<PdvEntity> {
        const pdv = await PdvModelPg.findByPk(id);
        if (!pdv) {
            throw new Error(`User with id ${id} not found`);
        }
        await pdv.update(data);
        return this.map(pdv); 
    }
}