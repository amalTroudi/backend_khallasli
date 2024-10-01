import { IOrganisationService, ORGANISATION_SERVICE } from "@/domain/use-cases/organisation-service";
import { IPdvService, PDV_SERVICE } from "@/domain/use-cases/pdv-service";
import { Adapter, Get, Mapping, Param } from "@tsclean/core";


@Mapping('/pdv')
export class PdvController {

    constructor(
        @Adapter(PDV_SERVICE) private readonly pdvService: IPdvService
    ) {
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
   
}