import { OrganisationModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/organisation-pg";

export const ORGANISATION_REPOSITORY = "ORGANISATION_REPOSITORY";

export interface IOrganisationRepository {
    organisationRepository: () => Promise<OrganisationModelPg[]> , 
    getOrganisationById: (id: number) => Promise<OrganisationModelPg | null>,
    getOrganisationByIdOrganisation: (id_organisation: string) => Promise<OrganisationModelPg | null>;
    getOrganisationByLibelle: (libelle: string) => Promise<OrganisationModelPg[]>;

 

}
export class OrganisationRepositoryImpl implements IOrganisationRepository{
   
    async organisationRepository(): Promise<OrganisationModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await OrganisationModelPg.findAll();
    }   
     //filter par id 
    async getOrganisationById(id: number): Promise<OrganisationModelPg | null> {
        return await OrganisationModelPg.findOne({
            where: { id }
        });
    }
      //filter par id bill 
      async getOrganisationByIdOrganisation(id_organisation: string): Promise<OrganisationModelPg | null> {
        return await OrganisationModelPg.findOne({
            where: { id_organisation}
        });
    }
     //  Filtrer par organizationId
     async getOrganisationByLibelle(libelle: string): Promise<OrganisationModelPg[]> {
        return await OrganisationModelPg.findAll({
            where: { libelle: libelle }
        });
    }
}