import { OrganisationModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/organisation-pg";

export const ORGANISATION_SERVICE = "ORGANISATION_SERVICE";

export interface IOrganisationService {
    organisationService: () => Promise<OrganisationModelPg[]>,
    getOrganisationById: (id: number) => Promise<OrganisationModelPg | null>;
    getOrganisationByIdOrganisation: (id_operateur: string) => Promise<OrganisationModelPg | null>;
    getOrganisationByLibelle :(libelle: string)=> Promise<OrganisationModelPg[]>

}