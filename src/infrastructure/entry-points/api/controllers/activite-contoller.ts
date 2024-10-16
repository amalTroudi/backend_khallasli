import { ACTIVITE_SERVICE, IActiviteService } from "@/domain/use-cases/activite-service";
import { Adapter, Get, Mapping } from "@tsclean/core";
import {  Router } from 'express'


@Mapping('/activite')
export class ActiviteController {
    public route: string = '/activite';
    public router: Router;
    

 

    constructor(
        @Adapter(ACTIVITE_SERVICE) private readonly activiteService: IActiviteService
    ) {
    }
     
    private initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.post('/activite', this.activiteController.bind(this));
    }

    @Get()
    // @Auth(["admin", "guest"])
    async activiteController(): Promise<any> {
        return await this.activiteService.activiteService();
    }
   
}