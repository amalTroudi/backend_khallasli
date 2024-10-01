import { PdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-pg";

export const PDV_REPOSITORY = "PDV_REPOSITORY";

export interface IPdvRepository {
    pdvRepository: () => Promise<PdvModelPg[]> , 
    getPdvById: (id: number) => Promise<PdvModelPg | null>,
    getPdvByIdPdv: (id_pdv: string) => Promise<PdvModelPg | null>;
    getPdvByIdCommercial: (id_commercial: string) => Promise<PdvModelPg | null>;
    getPdvByIdCategorie: (id_categorie: string) => Promise<PdvModelPg | null>;
    getPdvByVille: (ville: string) => Promise<PdvModelPg[]>;
    getPdvByRegion: (region: string) => Promise<PdvModelPg[]>;
    getPdvByCodeComptable: (code_comptable: number) => Promise<PdvModelPg[]>;

 

}
export class PdvRepositoryImpl implements IPdvRepository{
   
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
}