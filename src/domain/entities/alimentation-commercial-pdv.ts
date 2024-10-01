export type AlimentationCommercialPdvEntity = {
   
    id:  number;
    id_alimentation: string;
    montant: number;
    id_commercial : string ; 
    id_pdv : string ; 
    status : number ; 
    approuve_par : string ; 
    dt : Date ; 
  }
 
  
  export type AlimentationCommercialPdvParams = Omit<AlimentationCommercialPdvEntity, 'id'>
  