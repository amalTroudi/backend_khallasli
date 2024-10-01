export type CategoriesEntity = {
   
    id:  number;
    id_categorie: string;
    label: string;
    
  }
  export type CategoriesParams = Omit<CategoriesEntity, 'id'>
  