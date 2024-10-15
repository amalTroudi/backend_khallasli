import { GET_USERS_SERVICE, IGetUsersService } from "@/domain/use-cases/get-users-service";
import { Adapter, Get, Mapping } from "@tsclean/core";
import { Auth } from "../../helpers/auth";


@Mapping('/get-users')
export class GetUsersController {

     constructor(
         @Adapter(GET_USERS_SERVICE) private readonly getUsersService: IGetUsersService
     ) {
     }

    // @Get()
    // // @Roles('admin')
    //  @Auth(["admin", "user"])
    // async getUsersController(): Promise<any> {
    //     return await this.getUsersService.getUsersService();
    // }
    @Get()
    // @Auth(["admin", "user"])
    async getAllDataController(): Promise<any> {
        const allData = await this.getUsersService.getUsersService();
        
        console.log(allData); // Correct
    
        return allData;
    }
   
    }