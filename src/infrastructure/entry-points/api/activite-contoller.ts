import { ACTIVITE_SERVICE, IActiviteService } from "@/domain/use-cases/activite-service";
import { Adapter, Get, Mapping } from "@tsclean/core";


@Mapping('/activite')
export class ActiviteController {

    constructor(
        @Adapter(ACTIVITE_SERVICE) private readonly activiteService: IActiviteService
    ) {
    }

    @Get()
    // @Auth(["admin", "guest"])
    async activiteController(): Promise<any> {
        return await this.activiteService.activiteService();
    }
   
}