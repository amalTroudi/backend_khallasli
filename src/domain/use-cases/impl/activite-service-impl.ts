import { ACTIVITE_REPOSITORY, IActiviteRepository } from "@/domain/entities/contracts/activite-repository";
import { ActiviteModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/activite-pg";
import { Adapter, Service } from "@tsclean/core";
import { IActiviteService } from "../activite-service";


@Service()
export class GetActiviteServiceImpl implements IActiviteService {
   
    constructor(
        @Adapter(ACTIVITE_REPOSITORY) private readonly activiteRepository: IActiviteRepository
    ) {
    }

    async  activiteService(): Promise<ActiviteModelPg[]> {
        return await this.activiteRepository.activiteRepository();
    }
}