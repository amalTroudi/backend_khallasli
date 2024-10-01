export type AlimentationCommercialWalletEntity = {
   
    id:  number;
    id_history: string;
    new_balance: number;
    old_balance : number ; 
    debit : number , 
    montant_service : number ; 
    credit : number ; 
    service :  string ;
    dt : Date ;
    id_wallet : string ; 
    puv : number ; 
    qte : number; 
  }
 
  
  export type AlimentationCommercialWalletParams = Omit<AlimentationCommercialWalletEntity, 'id'>
  