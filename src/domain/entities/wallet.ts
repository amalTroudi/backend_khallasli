export type WalletEntity = {
   
    id :number , 
    id_wallet : string ,     
    balance : string ,
    status : string , 
    commercial_id : string ,
    total_credit : number,
    total_collect : number , 
    credit_commercial :number,
    

    
  }
 
  
  export type WalletParams = Omit<WalletEntity, 'id'>
  