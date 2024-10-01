export type DemandeAlimentationPdvEntity = {
   
    id:  number;
    id_alimentation: string;
    ref: number;
    bordereau_number: number; 
    approve_par : string ; 
    montant : number ; 
    bank: string ; 
    status : number ; 
    id_wallet : string ; 
    dt : Date ; 
    updated_at : Date ; 
    riembursed : number; 
  }
 
  
  export type DemandeAlimentationPdvParams = Omit<DemandeAlimentationPdvEntity, 'id'>
  