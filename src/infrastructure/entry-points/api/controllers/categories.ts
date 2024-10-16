import { CATEGORIES_SERVICE, ICategoriesService } from "@/domain/use-cases/categories-service";
import { Adapter, Get, Mapping, Param, Query } from "@tsclean/core";
import {  Router } from 'express'

@Mapping('/categories')
export class CategoriesController {
    public route: string = '/categories';
    public router: Router;
    

    constructor(
        @Adapter(CATEGORIES_SERVICE) private readonly categoriesService: ICategoriesService    ) {
    }
    private initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.post('/categories', this.categoriesController.bind(this));
    }

    @Get("/all")
    // @Auth(["admin", "guest"])
    async categoriesController(): Promise<any> {
        return await this.categoriesService.categoriesService();
    }
     
    @Get('id/:id')
    async getCategoriesById(@Param('id') id: number): Promise<any> {
        return await this.categoriesService.getCategoriesById(id);
    }
    @Get('categories/:label')
    async getCategoriesByLabel(@Param('label') label: string): Promise<any> {
        return await this.categoriesService.getCategoriesByLabel(label);
    }
   
}