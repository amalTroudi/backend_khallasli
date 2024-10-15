import { ACTIVITE_SERVICE, IActiviteService } from "@/domain/use-cases/activite-service";
import { ALIMENTATION_COMMERCIAL_PDV_SERVICE, IAlimentationCommercialPdvService } from "@/domain/use-cases/alimentation-commercial-pdv-service";
import { Adapter, Get, Mapping, Param, Query } from "@tsclean/core";


@Mapping('/alimentaionCommercialPdv')
export class AlimentationCommercialPdvController {

    constructor(
        @Adapter(ALIMENTATION_COMMERCIAL_PDV_SERVICE) private readonly alimentationCommercialPdvService: IAlimentationCommercialPdvService
    ) {
    }

    @Get("/all")
    // @Auth(["admin", "guest"])
    async alimentationCommercialPdvController(): Promise<any> {
        return await this.alimentationCommercialPdvService.alimentationCommercialPdvService();
    }
    
    @Get('/sortedByMontantAs')
    async getAlimentationCommercialPdvSortedByMontantAs(): Promise<any> {
        return await this.alimentationCommercialPdvService.getAlimentationCommercialPdvSortedByMontantAs();
    }
    @Get('/desc')
    async getAlimentationCommercialPdvSortedByMontantDesc(): Promise<any> {
        // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
        return await this.alimentationCommercialPdvService.getAlimentationCommercialPdvSortedByMontantDesc();
    }
      // Nouveau point de terminaison pour récupérer les enregistrements où status = 3
      @Get("/:status")
    async getByStatus(@Param("status") status: number): Promise<any> {
        // Ajout d'une vérification pour s'assurer que status est bien défini
        if (status === undefined || status === null) {
            throw new Error("Le paramètre status est manquant ou invalide");
        }

        return await this.alimentationCommercialPdvService.getAlimentationCommercialPdvByStatus(status);
    }

    @Get("/count/:status")
    async countByStatus(@Param("status") status: number): Promise<number> {
        return await this.alimentationCommercialPdvService.countAlimentationCommercialPdvByStatus(status);
    }
    @Get('/:id')
    async getById(@Param('id') id: number): Promise<any> {
        return await this.alimentationCommercialPdvService.getAlimentationCommercialPdvById(id);
    }
   
}