import { PdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-pg";

export const PDV_SERVICE = "PDV_SERVICE";

export interface IPdvService {
    pdvService: () => Promise<PdvModelPg[]>,
    getPdvById: (id: number) => Promise<PdvModelPg | null>;
    getPdvByIdPdv: (id_pdv: string) => Promise<PdvModelPg | null>;
    getPdvByIdCommercial: (id_commercial: string) => Promise<PdvModelPg | null>;
    getPdvByIdCategorie: (id_categorie: string) => Promise<PdvModelPg | null>;
    getPdvByVille :(ville: string)=> Promise<PdvModelPg[]> ; 
    getPdvByRegion :(region: string)=> Promise<PdvModelPg[]>
    getPdvByCodeComptable :(code_comptable: number)=> Promise<PdvModelPg[]>


}