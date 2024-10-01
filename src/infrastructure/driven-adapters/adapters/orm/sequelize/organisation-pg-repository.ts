import { IOperateurRepository } from "@/domain/entities/contracts/operateur-repository";
import { IOrganisationRepository } from "@/domain/entities/contracts/organisation-repository";
import { OpeerateurModelPg } from "./models/operateur-pg";
import { OrganisationModelPg } from "./models/organisation-pg";

export class OrganisationPgRepositoryAdapter implements IOrganisationRepository {
    
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