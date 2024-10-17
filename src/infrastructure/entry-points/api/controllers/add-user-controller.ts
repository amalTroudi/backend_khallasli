import { Router } from 'express';
import { Mapping, Post, Body, Inject } from "@tsclean/core";
import { AddUserParams, UserEntity } from "@/domain/entities/user";
import { ADD_USER_SERVICE, IAddUserService } from "@/domain/use-cases/add-user-service";

@Mapping('api/v1/add-user') // Le décorateur Mapping est suffisant pour définir la route de base
export class AddUserController {
    public router: Router;
    

    constructor(
        @Inject(ADD_USER_SERVICE) private readonly addUserService: IAddUserService,
    ) {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.post('/add-user', this.addUser.bind(this)); // Ce sera POST '/api/v1/add-user'
        // POST api/v1/add-user
    }

    async addUser(@Body() data: AddUserParams): Promise<UserEntity> {
        try {
            const user: UserEntity = await this.addUserService.addUserService(data);
            return user;
        } catch (error) {
            throw new Error("Erreur lors de l'ajout de l'utilisateur : " + error.message);
        }
    }
}
