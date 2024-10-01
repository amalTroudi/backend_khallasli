export type OganisationEntity = {
   
    id:  number;
    id_organisation: string;
    libelle :string ; 
  }
 
  
  export type OganisationParams = Omit<OganisationEntity, 'id'>
  