import {  Router } from 'express'
import { Mapping, Post, Body, Inject } from "@tsclean/core"; // Importer les décorateurs nécessaires
import { AddUserParams, UserEntity } from "@/domain/entities/user";
import { ADD_USER_SERVICE, IAddUserService } from "@/domain/use-cases/add-user-service";

@Mapping('api/v1/add-user') // Ajouter le décorateur de mapping
 // Indiquer que c'est un contrôleur
export class AddUserController {
    public route: string = '/api/v1/add-user';
    public router: Router;
    

    constructor(
        @Inject(ADD_USER_SERVICE) private readonly addUserService: IAddUserService ,
        )  {}
    private initializeRoutes() {
            // Route pour ajouter un utilisateur
            this.router.post('/add-user', this.addUser.bind(this));
        }
    

    @Post() // Indiquer que cette méthode gère les requêtes POST
    async addUser(@Body() data: AddUserParams): Promise<UserEntity> {
        try {
            const user: UserEntity = await this.addUserService.addUserService(data);
            return user; // Retourner l'utilisateur créé
        } catch (error) {
            throw new Error("Erreur lors de l'ajout de l'utilisateur : " + error); // Gérer l'erreur
        }
    }
}
