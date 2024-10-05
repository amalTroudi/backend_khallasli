import { PdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-pg";
import { Pool } from "pg";
import { PdvEntity, PdvParams } from "../pdv";

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
    addPdvRepository: (data: PdvParams) => Promise<PdvEntity>;
    deletePdvRepository: (id: string | number) => Promise<void>;
    updatePdvRepository: (id: string | number, data: Partial<PdvParams>) => Promise<PdvEntity>;

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
    // ajout d'un pdv 
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'pfe_db',
            password: 'admin',
            port: 5432, 
        });
    }
    updatePdvRepository: (id: string | number, data: Partial<PdvParams>) => Promise<PdvEntity>;

    async addPdvRepository(data: PdvParams): Promise<PdvEntity> {
        const { id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat } = data;
        const result = await this.pool.query(
            `INSERT INTO "pdv" (id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
             RETURNING id, id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat`,
            [id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat]
        );
        return result.rows[0];
    }
    // mise à jour d'un pdv
    async updatePDVRepository(id: string | number, data: Partial<PdvParams>): Promise<PdvEntity> {
        const { id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat } = data;
    
        const result = await this.pool.query(
            `UPDATE "pdv" 
             SET id_pdv = COALESCE($1, id_pdv), 
                 id_commercial = COALESCE($2, id_commercial), 
                 pos = COALESCE($3, pos), 
                 code_comptable = COALESCE($4, code_comptable), 
                 ville = COALESCE($5, ville), 
                 dt = COALESCE($6, dt), 
                 id_categorie = COALESCE($7, id_categorie), 
                 region = COALESCE($8, region), 
                 etat = COALESCE($9, etat) 
             WHERE id = $10 
             RETURNING id, id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat`,
            [id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat, id]
        );
    
        if (result.rowCount === 0) {
            throw new Error(`PDV with id ${id} not found`);
        }
    
        return result.rows[0];
    }
    

    // supprission d'un pdv 
     deletePdvRepository: (id: string | number) => Promise<void>;


    
}