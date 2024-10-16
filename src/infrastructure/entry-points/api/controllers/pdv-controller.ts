import { PdvEntity, PdvParams } from "@/domain/entities/pdv";
import { IPdvService, PDV_SERVICE } from "@/domain/use-cases/pdv-service";
import { Adapter, Body, Delete, Get, Mapping, Param, Post, Put } from "@tsclean/core";
import {  Router } from 'express'


@Mapping('/pdv')
export class PdvController {

    public route: string = '/pdv';
    public router: Router;


    constructor(
        @Adapter(PDV_SERVICE) private readonly pdvService: IPdvService
    ) {
    }
    private initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/pdv', this.pdvController.bind(this));
    }

    @Get("/all")
    // @Auth(["admin", "guest"])
    async pdvController(): Promise<any> {
        return await this.pdvService.pdvService();
    }     
    @Get('id/:id')
    async getPdvById(@Param('id') id: number): Promise<any> {
        return await this.pdvService.getPdvById(id);
    }
    @Get('id_pdv/:id_pdv')
    async getPdvnByIdPdv(@Param('id_pdv') id_pdv: string): Promise<any> {
        return await this.pdvService.getPdvByIdPdv(id_pdv);
    }
    @Get('id_commercial/:id_commercial')
    async getPdvByIdCommercial(@Param('id_commercial') id_commercial: string): Promise<any> {
        return await this.pdvService.getPdvByIdCommercial(id_commercial);
    }
    @Get('id_categorie/:id_categorie')
    async getPdvByIdCategorie(@Param('id_categorie') id_categorie: string): Promise<any> {
        return await this.pdvService.getPdvByIdCategorie(id_categorie);
    }
    
   
    @Get('/ville/:ville')
    async getPdvByVille(@Param('ville') ville: string): Promise<any> {
        return await this.pdvService.getPdvByVille(ville);
    }
    @Get('/region/:region')
    async getPdvByRegion(@Param('region') region: string): Promise<any> {
        return await this.pdvService.getPdvByRegion(region);
    }
    @Get('/code_comptable/:code_comptable')
    async getPdvByCodeComptable(@Param('code_comptable') code_comptable: number): Promise<any> {
        return await this.pdvService.getPdvByCodeComptable(code_comptable);
    }
    @Post()
    async addUserController(@Body() data: PdvParams): Promise<PdvEntity> {
        return await this.pdvService.addPdvService(data);
    }
    @Delete('delete/:id')
    async deleteUserController(@Param('id') id: string): Promise<void> {
        if (!id) {
            throw new Error("ID is required");
        }
        await this.pdvService.deletePdvService(id);
    }
    @Put('/modifier/:id')
    async updatePDVController(
        @Param('id') id: string,  // ID récupéré de l'URL
        @Body() data: Partial<PdvParams>
    ): Promise<PdvEntity> {
        console.log('ID reçu dans le contrôleur:', id); // Log pour vérifier l'ID
        return await this.pdvService.updatePdvService(id, data);
    }
   
}