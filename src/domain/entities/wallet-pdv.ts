export type WalletPdvEntity = {
   
    id :number , 
    id_wallet : string ,     
    balance : string ,
    companyid : string , 
    dt: Date , 
    status : string ,
    id_pdv : string,
   
    

    
  }
 
  
  export type WalletPdvParams = Omit<WalletPdvEntity, 'id'>
  