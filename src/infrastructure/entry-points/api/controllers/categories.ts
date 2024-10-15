import { BILL_SERVICE, IBillService } from "@/domain/use-cases/bill-service";
import { CATEGORIES_SERVICE, ICategoriesService } from "@/domain/use-cases/categories-service";
import { Adapter, Get, Mapping, Param, Query } from "@tsclean/core";


@Mapping('/categories')
export class CategoriesController {

    constructor(
        @Adapter(CATEGORIES_SERVICE) private readonly categoriesService: ICategoriesService    ) {
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