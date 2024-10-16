import { DELETE_USER_SERVICE, IDeleteUserService } from "@/domain/use-cases/delete-user-service";
import { Adapter, Delete, Mapping, Param } from "@tsclean/core";
import {  Router } from 'express'

@Mapping('api/v1/delete-user')
export class DeleteUserController {
    public route: string = '/api/v1/delete-user';
    public router: Router;
    
    constructor(
        @Adapter(DELETE_USER_SERVICE) private readonly deleteUserService: IDeleteUserService
    ) {}
    private initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.delete('/api/v1/delete-user', this.deleteUserController.bind(this));
    }

    @Delete('/:id')
    async deleteUserController(@Param('id') id: string): Promise<void> {
        if (!id) {
            throw new Error("ID is required");
        }
        await this.deleteUserService.deleteUserService(id);
    }
    
}
