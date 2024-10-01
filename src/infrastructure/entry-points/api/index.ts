import { ActiviteController } from "./activite-contoller";
import { AddUserController } from "./add-user-controller";
import { AlimentationCommercialPdvController } from "./alimentation-commercial-pdv-controller";
import { AlimentationCommercialWalletController } from "./alimentation-commercial-wallet-controller";
import { AuthenticationController } from "./authentification-controller";
import { BillController } from "./bill-controller";
import { CategoriesController } from "./categories";
import { DeleteUserController } from "./delete-user-controller";
import { DemandeAlimentationPdvController } from "./demande-alimentation-pdv-controller";
import { GetUsersController } from "./get-users-controller";
import { HistoryWalletPdvController } from "./history-wallet-pdv-controller";
import { LeadsController } from "./leads-controller";
import { OperateurController } from "./operateur-controller";
import { OrganisationController } from "./organisation-controller";
import { PdvController } from "./pdv-controller";
import { ReportsController } from "./reports-contoller";

export const controllers = [
    AddUserController , 
    GetUsersController , 
    AuthenticationController , 
    DeleteUserController , 
    ActiviteController , 
    AlimentationCommercialPdvController , 
    AlimentationCommercialWalletController , 
    BillController , 
    CategoriesController , 
    DemandeAlimentationPdvController , 
    HistoryWalletPdvController, 
    LeadsController , 
    OperateurController , 
    OrganisationController , 
    PdvController , 
    ReportsController
];