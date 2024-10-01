export type AlimentationCommercialWalletEntity = {
   
    id:  number;
    id_alimentation: string;
    montant: number;
    id_commercial : string ; 
    status : number ;  
    dt : Date ; 
  }
 
  
  export type AlimentationCommercialWalletParams = Omit<AlimentationCommercialWalletEntity, 'id'>
  