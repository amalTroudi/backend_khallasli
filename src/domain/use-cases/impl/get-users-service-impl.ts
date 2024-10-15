import { GET_USERS_REPOSITORY, IGetUsersRepository } from "@/domain/entities/contracts/get-users-repository";
import { UserModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg";
import { Adapter, Service } from "@tsclean/core";
import { IGetUsersService } from "../get-users-service";

@Service()
export class GetUsersServiceImpl implements IGetUsersService {
    // constructor(
    //     @Adapter(GET_USERS_REPOSITORY) private readonly getUsersRepository: IGetUsersRepository
    // ) {
    // }

    // async getUsersService(): Promise<UserModelPg[]> {
    //     return await this.getUsersRepository.getUsersRepository();
    // }
    constructor(
        @Adapter(GET_USERS_REPOSITORY) private readonly getAllDataRepository: IGetUsersRepository
    ) {}

    async getUsersService(): Promise<any> {
        return await this.getAllDataRepository.getUsersRepository();
    }
}