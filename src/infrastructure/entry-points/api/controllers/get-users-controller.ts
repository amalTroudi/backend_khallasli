import { GET_USERS_SERVICE, IGetUsersService } from "@/domain/use-cases/get-users-service";
import { Adapter, Get, Mapping } from "@tsclean/core";
import {  Router } from 'express'
import { Auth } from "../../helpers/auth";


@Mapping('/get-users')
export class GetUsersController {
    public route: string = '/get-users';
    public router: Router;

     constructor(
         @Adapter(GET_USERS_SERVICE) private readonly getUsersService: IGetUsersService
     ) {
     }
     private initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/get-users', this.getUsersController.bind(this));
    }

     @Get()
    // @Roles('admin')
     @Auth(["admin"])
    async getUsersController(): Promise<any> {
        return await this.getUsersService.getUsersService();
    }
    // @Get()
    // // @Auth(["admin", "user"])
    // async getAllDataController(): Promise<any> {
    //     const allData = await this.getUsersService.getUsersService();
        
    //     console.log(allData); // Correct
    
    //     return allData;
    // }
   
    }