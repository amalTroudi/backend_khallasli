export type OperateurEntity = {
   
    id:  number;
    id_operateur: string;
    id_operateur_topup : string ; 
    libelle :string ; 
  }
 
  
  export type OperateurParams = Omit<OperateurEntity, 'id'>
  