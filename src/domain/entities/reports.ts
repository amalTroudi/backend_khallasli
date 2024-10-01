export type ReportsEntity = {
   
    id:  number;
    id_report: string;
    id_user : string ;
    boutique: string;   
    ville : string; 
    secteur : string;
    dt : Date ; 
    zone: string ;  
    poste : string ; 
    banque : string ; 
    nom_banque : string ; 
   
  }
 
  
  export type ReportsParams = Omit<ReportsEntity, 'id'>
  