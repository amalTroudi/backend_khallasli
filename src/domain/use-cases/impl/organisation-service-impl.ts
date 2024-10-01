import { IOperateurRepository, OPERATEUR_REPOSITORY } from "@/domain/entities/contracts/operateur-repository";
import { IOrganisationRepository, ORGANISATION_REPOSITORY } from "@/domain/entities/contracts/organisation-repository";
import { OpeerateurModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/operateur-pg";
import { OrganisationModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/organisation-pg";
import { Adapter, Service } from "@tsclean/core";
import { IOperateurService } from "../operateur-service";
import { IOrganisationService } from "../organisation-service";


@Service()
export class OrganisationServiceImpl implements IOrganisationService {
   
    constructor(
        @Adapter(ORGANISATION_REPOSITORY) private readonly organisationRepository: IOrganisationRepository 
    ) {
    }

    async  organisationService(): Promise<OrganisationModelPg[]> {
        return await this.organisationRepository.organisationRepository();
    }  
    async getOrganisationById(id: number): Promise<OrganisationModelPg | null> {
        return await this.organisationRepository.getOrganisationById(id);
    }
    async getOrganisationByIdOrganisation(id_organisation: string): Promise<OrganisationModelPg | null> {
        return await this.organisationRepository.getOrganisationByIdOrganisation(id_organisation);
    }
    async getOrganisationByLibelle(libelle: string): Promise<OrganisationModelPg[]> {
        return await this.organisationRepository.getOrganisationByLibelle(libelle);
    }
}