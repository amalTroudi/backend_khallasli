export type ActiviteEntity = {
   
    id:  number;
    id_activite: string;
    nom: string;
   
    
  }
 
  
  export type ActivateParams = Omit<ActiviteEntity, 'id'>
  