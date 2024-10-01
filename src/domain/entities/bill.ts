export type BillEntity = {
   
    id:  number;
    id_bill: string;
    id_user: string;
    organisationid : string ; 
    amount : number ;  
    date_add : Date ;
    code_comptable :number ; 
  }
 
  
  export type BillParams = Omit<BillEntity, 'id'>
  