import { ACTIVITE_REPOSITORY } from "@/domain/entities/contracts/activite-repository";
import { ADD_USER_REPOSITORY } from "@/domain/entities/contracts/add-user-repository";
import { ALIMENTATION_COMMERCIAL_PDV_REPOSITORY } from "@/domain/entities/contracts/alimentation-commercial-pdv";
import { ALIMENTATION_COMMERCIAL_WALLET_REPOSITORY } from "@/domain/entities/contracts/alimentation-commercial-wallet-repository";
import { AUTHENTICATION_REPOSITORY } from "@/domain/entities/contracts/authentification-repository";
import { BILL_REPOSITORY } from "@/domain/entities/contracts/bill-repository";
import { CATEGORIES_REPOSITORY } from "@/domain/entities/contracts/categories-repository";
import { CHECK_EMAIL_REPOSITORY } from "@/domain/entities/contracts/check-email-repository";
import { DECRYPT_REPOSITORY } from "@/domain/entities/contracts/decrypt-repository";
import { DELETE_USER_REPOSITORY } from "@/domain/entities/contracts/delete-user-repository";
import { DEMANDE_ALIMENTATION_PDV_REPOSITORY } from "@/domain/entities/contracts/demande-alimentation-pdv-repository";
import { ENCRYPT_REPOSITORY } from "@/domain/entities/contracts/encrypt-repository";
import { GET_USERS_REPOSITORY } from "@/domain/entities/contracts/get-users-repository";
import { HASH_COMPARE_REPOSITORY } from "@/domain/entities/contracts/hash-compare-repository";
import { HASH_REPOSITORY } from "@/domain/entities/contracts/hash-repository";
import { HISTORY_WALLET_PDV_REPOSITORY } from "@/domain/entities/contracts/history-wallet-pdv-repository";
import { LeadsRepositoryImpl, LEADS_REPOSITORY } from "@/domain/entities/contracts/leads-repository";
import { OPERATEUR_REPOSITORY } from "@/domain/entities/contracts/operateur-repository";
import { ORGANISATION_REPOSITORY } from "@/domain/entities/contracts/organisation-repository";
import { PDV_REPOSITORY } from "@/domain/entities/contracts/pdv-repository";
import { REPORTS_REPOSITORY } from "@/domain/entities/contracts/reports-repository";
import { UPDATE_ACCESS_TOKEN_REPOSITORY } from "@/domain/entities/contracts/update-access-token-repository";
import { ACTIVITE_SERVICE } from "@/domain/use-cases/activite-service";
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-user-service";
import { ALIMENTATION_COMMERCIAL_PDV_SERVICE } from "@/domain/use-cases/alimentation-commercial-pdv-service";
import { ALIMENTATION_COMMERCIAL_WALLET_SERVICE } from "@/domain/use-cases/alimentation-commercial-wallet-service";
import { AUTHENTICATION_SERVICE } from "@/domain/use-cases/authentification-service";
import { BILL_SERVICE } from "@/domain/use-cases/bill-service";
import { CATEGORIES_SERVICE } from "@/domain/use-cases/categories-service";
import { DELETE_USER_SERVICE } from "@/domain/use-cases/delete-user-service";
import { DEMANDE_ALIMENTATION_PDV_SERVICE } from "@/domain/use-cases/demande-alimentation-pdv-service";
import { GET_USERS_SERVICE } from "@/domain/use-cases/get-users-service";
import { HISTORY_WALLET_PDV_SERVICE } from "@/domain/use-cases/history-wallet-pdv-service";
import { GetActiviteServiceImpl } from "@/domain/use-cases/impl/activite-service-impl";
import { AddUserServiceImpl } from "@/domain/use-cases/impl/add-user-service-impl";
import { AlimentationCommercialPdvServiceImpl } from "@/domain/use-cases/impl/alimentation-commercial-pdv-service-impl";
import { AuthenticationServiceImpl } from "@/domain/use-cases/impl/authentification-service-impl";
import { BillServiceImpl } from "@/domain/use-cases/impl/bill-service-impl";
import { CategoriesServiceImpl } from "@/domain/use-cases/impl/categories-service-impl";
import { DeleteUserServiceImpl } from "@/domain/use-cases/impl/delete-user-service-impl";
import { DemandeAlimentationPdvServiceImpl } from "@/domain/use-cases/impl/demande-alimentation-pdv-service-impl";
import { GetUsersServiceImpl } from "@/domain/use-cases/impl/get-users-service-impl";
import { HistoryWalletPdvServiceImpl } from "@/domain/use-cases/impl/history-wallet-pdv-service-impl";
import { LeadsServiceImpl } from "@/domain/use-cases/impl/leads-service_impl";
import { OperateurServiceImpl } from "@/domain/use-cases/impl/operateur-service_impl";
import { OrganisationServiceImpl } from "@/domain/use-cases/impl/organisation-service-impl";
import { PdvServiceImpl } from "@/domain/use-cases/impl/pdv-service-impl";
import { ReportsServiceImpl } from "@/domain/use-cases/impl/reports-service-impl";
import { LEADS_SERVICE } from "@/domain/use-cases/leads-service";
import { OPERATEUR_SERVICE } from "@/domain/use-cases/operateur-service";
import { ORGANISATION_SERVICE } from "@/domain/use-cases/organisation-service";
import { PDV_SERVICE } from "@/domain/use-cases/pdv-service";
import { REPORTS_SERVICE } from "@/domain/use-cases/reports-service";
import { BcryptAdapter } from "../adapters/bcrypt-adapter";
import { JwtAdapter } from "../adapters/jwt-adapter";
import { ActivitePgRepositoryAdapter } from "../adapters/orm/sequelize/activite-pg-repository-adapter";
import { AlimentationCommercialPdvPgRepositoryAdapter } from "../adapters/orm/sequelize/alimentation-commercial-pdv-pg-repository-adapter";
import { AlimentationCommercialWalletPgRepositoryAdapter } from "../adapters/orm/sequelize/alimentation-commercial-wallet-pg-repository-adapter";
import { BillPgRepositoryAdapter } from "../adapters/orm/sequelize/bill-pg-repository";
import { CategoriesPgRepositoryAdapter } from "../adapters/orm/sequelize/categories-pg-repository";
import { DemandeAlimentationPDVPgRepositoryAdapter } from "../adapters/orm/sequelize/demande-alimentation-pdv-pg-repository-adapter";
import { HistoryWalletPdvPgRepositoryAdapter } from "../adapters/orm/sequelize/history-wallet-pdv-pg-repository";
import { OperateurPgRepositoryAdapter } from "../adapters/orm/sequelize/operateur-pg-repository";
import { OrganisationPgRepositoryAdapter } from "../adapters/orm/sequelize/organisation-pg-repository";
import { PdvPgRepositoryAdapter } from "../adapters/orm/sequelize/pdv-pg-repository-adapter";
import { ReportsPgRepositoryAdapter } from "../adapters/orm/sequelize/reports-pg-repository-adapter";
import { UserPgRepositoryAdapter } from "../adapters/orm/sequelize/user-pg-repository-adapter";

export const adapters = [ {
    provide: HASH_REPOSITORY,
    useClass: BcryptAdapter,

},
{
    provide: ADD_USER_REPOSITORY,
    useClass: UserPgRepositoryAdapter,
},
{
    provide: GET_USERS_REPOSITORY,
    useClass: UserPgRepositoryAdapter,
},
{
    provide: CHECK_EMAIL_REPOSITORY,
    useClass: UserPgRepositoryAdapter,
},
{
    provide: UPDATE_ACCESS_TOKEN_REPOSITORY,
    useClass: UserPgRepositoryAdapter,
},
{
    provide: HASH_COMPARE_REPOSITORY,
    useClass: BcryptAdapter,
},
{
    provide: ENCRYPT_REPOSITORY,
    useClass: JwtAdapter,
},
{
    provide: DECRYPT_REPOSITORY,
    useClass: JwtAdapter,
},
{
    provide: DELETE_USER_REPOSITORY,
    useClass: UserPgRepositoryAdapter,
},{
    provide: AUTHENTICATION_REPOSITORY,
    useClass: UserPgRepositoryAdapter,
},{
    provide : ACTIVITE_REPOSITORY,
    useClass : ActivitePgRepositoryAdapter,
},{
    provide : ALIMENTATION_COMMERCIAL_PDV_REPOSITORY, 
    useClass : AlimentationCommercialPdvPgRepositoryAdapter,
},{
    provide : ALIMENTATION_COMMERCIAL_WALLET_REPOSITORY,
    useClass : AlimentationCommercialWalletPgRepositoryAdapter ,
},{
    provide : BILL_REPOSITORY , 
    useClass : BillPgRepositoryAdapter ,
} ,{
    provide : CATEGORIES_REPOSITORY, 
    useClass : CategoriesPgRepositoryAdapter ,
} ,{
    provide : DEMANDE_ALIMENTATION_PDV_REPOSITORY, 
    useClass :DemandeAlimentationPDVPgRepositoryAdapter,
},{
    provide : HISTORY_WALLET_PDV_REPOSITORY, 
    useClass : HistoryWalletPdvPgRepositoryAdapter ,
},{
    provide : LEADS_REPOSITORY , 
    useClass : LeadsRepositoryImpl ,
},{
    provide : OPERATEUR_REPOSITORY , 
    useClass : OperateurPgRepositoryAdapter,
},{
    provide : ORGANISATION_REPOSITORY , 
    useClass : OrganisationPgRepositoryAdapter ,
},{
    provide : PDV_REPOSITORY ,
    useClass : PdvPgRepositoryAdapter,
},{
    provide : REPORTS_REPOSITORY , 
    useClass : ReportsPgRepositoryAdapter ,
}

];
        
export const services = [
    {
        useClass: AddUserServiceImpl,
        provide: ADD_USER_SERVICE
    },{
         provide: GET_USERS_SERVICE,
        useClass: GetUsersServiceImpl,
    
    },{

        provide: AUTHENTICATION_SERVICE,
        useClass: AuthenticationServiceImpl,
    },{

        provide: DELETE_USER_SERVICE,
        useClass: DeleteUserServiceImpl,
    },{
        provide: ACTIVITE_SERVICE,
        useClass: GetActiviteServiceImpl,
    },{
        provide: ALIMENTATION_COMMERCIAL_PDV_SERVICE,
        useClass: AlimentationCommercialPdvServiceImpl,
    },{
        provide : ALIMENTATION_COMMERCIAL_WALLET_SERVICE,
        useClass : AlimentationCommercialPdvServiceImpl,
    },{
        provide: BILL_SERVICE, 
        useClass : BillServiceImpl ,
    },{
        provide: CATEGORIES_SERVICE,
        useClass: CategoriesServiceImpl,
    },{
        provide: DEMANDE_ALIMENTATION_PDV_SERVICE,
        useClass: DemandeAlimentationPdvServiceImpl,
    },{
        provide: HISTORY_WALLET_PDV_SERVICE,
        useClass: HistoryWalletPdvServiceImpl,
    },{
        provide : LEADS_SERVICE , 
        useClass : LeadsServiceImpl ,

    },{
        provide : OPERATEUR_SERVICE,
        useClass : OperateurServiceImpl,
    },{
        provide : ORGANISATION_SERVICE,
        useClass : OrganisationServiceImpl,
    },{
        provide : PDV_SERVICE , 
        useClass : PdvServiceImpl,
    },{
        provide : REPORTS_SERVICE, 
        useClass : ReportsServiceImpl,
    }
];