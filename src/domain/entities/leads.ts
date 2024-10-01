export type LeadsEntity = {
   
    id:  number;
    id_lead: string;
    status : number ; 
    raisopn : string ; 
    dt_rdv : Date ;
    id_user: string;
    id_report :string ; 
  }
 
  
  export type LeadsParams = Omit<LeadsEntity, 'id'>
  