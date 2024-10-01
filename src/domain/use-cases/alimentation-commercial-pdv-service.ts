import { AlimentationCommercialPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-pdv-pg";

export const ALIMENTATION_COMMERCIAL_PDV_SERVICE = "ALIMENTATION_COMMERCIAL_PDV_SERVICE";

export interface IAlimentationCommercialPdvService {
    alimentationCommercialPdvService: () => Promise<AlimentationCommercialPdvModelPg[]>,
    getAlimentationCommercialPdvSortedByMontantAs: () => Promise<AlimentationCommercialPdvModelPg[]> , 
    getAlimentationCommercialPdvSortedByMontantDesc: () => Promise<AlimentationCommercialPdvModelPg[]> ,
    getAlimentationCommercialPdvByStatus: (status:number)=>Promise<AlimentationCommercialPdvModelPg[]> , 
    countAlimentationCommercialPdvByStatus: (status: number) => Promise<number> , 
    getAlimentationCommercialPdvById: (id: number) => Promise<AlimentationCommercialPdvModelPg | null>;

}