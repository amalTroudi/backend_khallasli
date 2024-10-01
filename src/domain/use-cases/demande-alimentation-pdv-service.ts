import { DemandeAlimentationPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/demande-alimentation-pdv-pg";

export const DEMANDE_ALIMENTATION_PDV_SERVICE = "DEMANDE_ALIMENTATION_PDV_SERVICE";

export interface IDemandeAlimentationPdvService {
    demandeAlimentationPdvService: () => Promise<DemandeAlimentationPdvModelPg[]>,
    getDemandeAlimentationPdvSortedByMontantAs: () => Promise<DemandeAlimentationPdvModelPg[]> , 
    getDemandeAlimentationPdvSortedByMontantDesc: () => Promise<DemandeAlimentationPdvModelPg[]> ,
    getDemandeAlimentationPdvByStatus: (status:number)=>Promise<DemandeAlimentationPdvModelPg[]> , 
    countDemandeAlimentationPdvByStatus: (status: number) => Promise<number> , 
    getDemandeAlimentationPdvById: (id: number) => Promise<DemandeAlimentationPdvModelPg | null>;
    getDemandeAlimentationPdvByIdAlimentation: (id_alimentation: string) => Promise<DemandeAlimentationPdvModelPg | null>;
    getDemandeAlimentationPdvByIdWallet: (id_wallet: string) => Promise<DemandeAlimentationPdvModelPg | null>;
    getDemandeAlimentationPdvByRef: (ref: number) => Promise<DemandeAlimentationPdvModelPg | null>;
    getDemandeAlimentationPdvByBank: (bank: string) => Promise<DemandeAlimentationPdvModelPg | null>;


}