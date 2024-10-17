"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = exports.adapters = void 0;
const activite_repository_1 = require("@/domain/entities/contracts/activite-repository");
const alimentation_commercial_pdv_1 = require("@/domain/entities/contracts/alimentation-commercial-pdv");
const alimentation_commercial_wallet_repository_1 = require("@/domain/entities/contracts/alimentation-commercial-wallet-repository");
const authentification_repository_1 = require("@/domain/entities/contracts/authentification-repository");
const bill_repository_1 = require("@/domain/entities/contracts/bill-repository");
const categories_repository_1 = require("@/domain/entities/contracts/categories-repository");
const check_email_repository_1 = require("@/domain/entities/contracts/check-email-repository");
const decrypt_repository_1 = require("@/domain/entities/contracts/decrypt-repository");
const delete_user_repository_1 = require("@/domain/entities/contracts/delete-user-repository");
const demande_alimentation_pdv_repository_1 = require("@/domain/entities/contracts/demande-alimentation-pdv-repository");
const encrypt_repository_1 = require("@/domain/entities/contracts/encrypt-repository");
const get_users_repository_1 = require("@/domain/entities/contracts/get-users-repository");
const hash_compare_repository_1 = require("@/domain/entities/contracts/hash-compare-repository");
const hash_repository_1 = require("@/domain/entities/contracts/hash-repository");
const history_wallet_pdv_repository_1 = require("@/domain/entities/contracts/history-wallet-pdv-repository");
const leads_repository_1 = require("@/domain/entities/contracts/leads-repository");
const operateur_repository_1 = require("@/domain/entities/contracts/operateur-repository");
const organisation_repository_1 = require("@/domain/entities/contracts/organisation-repository");
const pdv_repository_1 = require("@/domain/entities/contracts/pdv-repository");
const update_access_token_repository_1 = require("@/domain/entities/contracts/update-access-token-repository");
const update_user_repository_1 = require("@/domain/entities/contracts/update-user-repository");
const wallet_pdv_repository_1 = require("@/domain/entities/contracts/wallet-pdv-repository");
const wallet_repository_1 = require("@/domain/entities/contracts/wallet-repository");
const activite_service_1 = require("@/domain/use-cases/activite-service");
const add_user_service_1 = require("@/domain/use-cases/add-user-service");
const alimentation_commercial_pdv_service_1 = require("@/domain/use-cases/alimentation-commercial-pdv-service");
const alimentation_commercial_wallet_service_1 = require("@/domain/use-cases/alimentation-commercial-wallet-service");
const authentification_service_1 = require("@/domain/use-cases/authentification-service");
const bill_service_1 = require("@/domain/use-cases/bill-service");
const categories_service_1 = require("@/domain/use-cases/categories-service");
const delete_user_service_1 = require("@/domain/use-cases/delete-user-service");
const demande_alimentation_pdv_service_1 = require("@/domain/use-cases/demande-alimentation-pdv-service");
const get_users_service_1 = require("@/domain/use-cases/get-users-service");
const history_wallet_pdv_service_1 = require("@/domain/use-cases/history-wallet-pdv-service");
const activite_service_impl_1 = require("@/domain/use-cases/impl/activite-service-impl");
const add_user_service_impl_1 = require("@/domain/use-cases/impl/add-user-service-impl");
const alimentation_commercial_pdv_service_impl_1 = require("@/domain/use-cases/impl/alimentation-commercial-pdv-service-impl");
const alimentation_commercial_wallet_service_impl_1 = require("@/domain/use-cases/impl/alimentation-commercial-wallet-service-impl");
const authentification_service_impl_1 = require("@/domain/use-cases/impl/authentification-service-impl");
const bill_service_impl_1 = require("@/domain/use-cases/impl/bill-service-impl");
const categories_service_impl_1 = require("@/domain/use-cases/impl/categories-service-impl");
const delete_user_service_impl_1 = require("@/domain/use-cases/impl/delete-user-service-impl");
const demande_alimentation_pdv_service_impl_1 = require("@/domain/use-cases/impl/demande-alimentation-pdv-service-impl");
const get_users_service_impl_1 = require("@/domain/use-cases/impl/get-users-service-impl");
const history_wallet_pdv_service_impl_1 = require("@/domain/use-cases/impl/history-wallet-pdv-service-impl");
const leads_service_impl_1 = require("@/domain/use-cases/impl/leads-service_impl");
const operateur_service_impl_1 = require("@/domain/use-cases/impl/operateur-service_impl");
const organisation_service_impl_1 = require("@/domain/use-cases/impl/organisation-service-impl");
const pdv_service_impl_1 = require("@/domain/use-cases/impl/pdv-service-impl");
const update_user_service_impl_1 = require("@/domain/use-cases/impl/update-user-service-impl");
const wallet_pdv_service_impl_1 = require("@/domain/use-cases/impl/wallet-pdv-service-impl");
const wallet_service_impl_1 = require("@/domain/use-cases/impl/wallet-service-impl");
const leads_service_1 = require("@/domain/use-cases/leads-service");
const operateur_service_1 = require("@/domain/use-cases/operateur-service");
const organisation_service_1 = require("@/domain/use-cases/organisation-service");
const pdv_service_1 = require("@/domain/use-cases/pdv-service");
const update_user_service_1 = require("@/domain/use-cases/update-user-service");
const wallet_pdv_service_1 = require("@/domain/use-cases/wallet-pdv-service");
const wallet_service_1 = require("@/domain/use-cases/wallet-service");
const bcrypt_adapter_1 = require("../adapters/bcrypt-adapter");
const jwt_adapter_1 = require("../adapters/jwt-adapter");
const activite_pg_repository_adapter_1 = require("../adapters/orm/sequelize/activite-pg-repository-adapter");
const alimentation_commercial_pdv_pg_repository_adapter_1 = require("../adapters/orm/sequelize/alimentation-commercial-pdv-pg-repository-adapter");
const alimentation_commercial_wallet_pg_repository_adapter_1 = require("../adapters/orm/sequelize/alimentation-commercial-wallet-pg-repository-adapter");
const bill_pg_repository_1 = require("../adapters/orm/sequelize/bill-pg-repository");
const categories_pg_repository_1 = require("../adapters/orm/sequelize/categories-pg-repository");
const demande_alimentation_pdv_pg_repository_adapter_1 = require("../adapters/orm/sequelize/demande-alimentation-pdv-pg-repository-adapter");
const history_wallet_pdv_pg_repository_1 = require("../adapters/orm/sequelize/history-wallet-pdv-pg-repository");
const operateur_pg_repository_1 = require("../adapters/orm/sequelize/operateur-pg-repository");
const organisation_pg_repository_1 = require("../adapters/orm/sequelize/organisation-pg-repository");
const pdv_pg_repository_adapter_1 = require("../adapters/orm/sequelize/pdv-pg-repository-adapter");
const user_pg_repository_adapter_1 = require("../adapters/orm/sequelize/user-pg-repository-adapter");
const wallet_pdv_pg_repository_adapter_1 = require("../adapters/orm/sequelize/wallet-pdv-pg-repository-adapter");
const wallet_pg_repository_adapter_1 = require("../adapters/orm/sequelize/wallet-pg-repository-adapter");
exports.adapters = [{
        provide: hash_repository_1.HASH_REPOSITORY,
        useClass: bcrypt_adapter_1.BcryptAdapter,
    },
    {
        provide: add_user_service_1.ADD_USER_SERVICE,
        useClass: add_user_service_impl_1.AddUserServiceImpl,
    },
    {
        provide: get_users_repository_1.GET_USERS_REPOSITORY,
        useClass: user_pg_repository_adapter_1.UserPgRepositoryAdapter,
    },
    {
        provide: check_email_repository_1.CHECK_EMAIL_REPOSITORY,
        useClass: user_pg_repository_adapter_1.UserPgRepositoryAdapter,
    },
    {
        provide: update_access_token_repository_1.UPDATE_ACCESS_TOKEN_REPOSITORY,
        useClass: user_pg_repository_adapter_1.UserPgRepositoryAdapter,
    },
    {
        provide: hash_compare_repository_1.HASH_COMPARE_REPOSITORY,
        useClass: bcrypt_adapter_1.BcryptAdapter,
    },
    {
        provide: encrypt_repository_1.ENCRYPT_REPOSITORY,
        useClass: jwt_adapter_1.JwtAdapter,
    },
    {
        provide: decrypt_repository_1.DECRYPT_REPOSITORY,
        useClass: jwt_adapter_1.JwtAdapter,
    },
    {
        provide: delete_user_repository_1.DELETE_USER_REPOSITORY,
        useClass: user_pg_repository_adapter_1.UserPgRepositoryAdapter,
    }, {
        provide: authentification_repository_1.AUTHENTICATION_REPOSITORY,
        useClass: user_pg_repository_adapter_1.UserPgRepositoryAdapter,
    }, {
        provide: activite_repository_1.ACTIVITE_REPOSITORY,
        useClass: activite_pg_repository_adapter_1.ActivitePgRepositoryAdapter,
    }, {
        provide: alimentation_commercial_pdv_1.ALIMENTATION_COMMERCIAL_PDV_REPOSITORY,
        useClass: alimentation_commercial_pdv_pg_repository_adapter_1.AlimentationCommercialPdvPgRepositoryAdapter,
    }, {
        provide: alimentation_commercial_wallet_repository_1.ALIMENTATION_COMMERCIAL_WALLET_REPOSITORY,
        useClass: alimentation_commercial_wallet_pg_repository_adapter_1.AlimentationCommercialWalletPgRepositoryAdapter,
    }, {
        provide: bill_repository_1.BILL_REPOSITORY,
        useClass: bill_pg_repository_1.BillPgRepositoryAdapter,
    }, {
        provide: categories_repository_1.CATEGORIES_REPOSITORY,
        useClass: categories_pg_repository_1.CategoriesPgRepositoryAdapter,
    }, {
        provide: demande_alimentation_pdv_repository_1.DEMANDE_ALIMENTATION_PDV_REPOSITORY,
        useClass: demande_alimentation_pdv_pg_repository_adapter_1.DemandeAlimentationPDVPgRepositoryAdapter,
    }, {
        provide: history_wallet_pdv_repository_1.HISTORY_WALLET_PDV_REPOSITORY,
        useClass: history_wallet_pdv_pg_repository_1.HistoryWalletPdvPgRepositoryAdapter,
    }, {
        provide: leads_repository_1.LEADS_REPOSITORY,
        useClass: leads_repository_1.LeadsRepositoryImpl,
    }, {
        provide: operateur_repository_1.OPERATEUR_REPOSITORY,
        useClass: operateur_pg_repository_1.OperateurPgRepositoryAdapter,
    }, {
        provide: organisation_repository_1.ORGANISATION_REPOSITORY,
        useClass: organisation_pg_repository_1.OrganisationPgRepositoryAdapter,
    }, {
        provide: pdv_repository_1.PDV_REPOSITORY,
        useClass: pdv_pg_repository_adapter_1.PdvPgRepositoryAdapter,
    }, {
        provide: update_user_repository_1.UPDATE_USER_REPOSITORY,
        useClass: user_pg_repository_adapter_1.UserPgRepositoryAdapter,
    }, {
        provide: wallet_repository_1.WALLET_REPOSITORY,
        useClass: wallet_pg_repository_adapter_1.WalletPgRepositoryAdapter,
    }, {
        provide: wallet_pdv_repository_1.WALLET_PDV_REPOSITORY,
        useClass: wallet_pdv_pg_repository_adapter_1.WalletPdvPgRepositoryAdapter,
    }
    // ,{
    //     provide : REPORTS_REPOSITORY , 
    //     useClass : ReportsPgRepositoryAdapter ,
    // }
];
exports.services = [
    {
        useClass: add_user_service_impl_1.AddUserServiceImpl,
        provide: add_user_service_1.ADD_USER_SERVICE
    }, {
        provide: get_users_service_1.GET_USERS_SERVICE,
        useClass: get_users_service_impl_1.GetUsersServiceImpl,
    }, {
        provide: authentification_service_1.AUTHENTICATION_SERVICE,
        useClass: authentification_service_impl_1.AuthenticationServiceImpl,
    }, {
        provide: delete_user_service_1.DELETE_USER_SERVICE,
        useClass: delete_user_service_impl_1.DeleteUserServiceImpl,
    }, {
        provide: activite_service_1.ACTIVITE_SERVICE,
        useClass: activite_service_impl_1.GetActiviteServiceImpl,
    }, {
        provide: alimentation_commercial_pdv_service_1.ALIMENTATION_COMMERCIAL_PDV_SERVICE,
        useClass: alimentation_commercial_pdv_service_impl_1.AlimentationCommercialPdvServiceImpl,
    },
    {
        provide: alimentation_commercial_wallet_service_1.ALIMENTATION_COMMERCIAL_WALLET_SERVICE, // Assure-toi d'utiliser l'interface correcte
        useClass: alimentation_commercial_wallet_service_impl_1.AlimentationCommercialWalletServiceImpl,
    },
    {
        provide: bill_service_1.BILL_SERVICE,
        useClass: bill_service_impl_1.BillServiceImpl,
    }, {
        provide: categories_service_1.CATEGORIES_SERVICE,
        useClass: categories_service_impl_1.CategoriesServiceImpl,
    }, {
        provide: demande_alimentation_pdv_service_1.DEMANDE_ALIMENTATION_PDV_SERVICE,
        useClass: demande_alimentation_pdv_service_impl_1.DemandeAlimentationPdvServiceImpl,
    }, {
        provide: history_wallet_pdv_service_1.HISTORY_WALLET_PDV_SERVICE,
        useClass: history_wallet_pdv_service_impl_1.HistoryWalletPdvServiceImpl,
    }, {
        provide: leads_service_1.LEADS_SERVICE,
        useClass: leads_service_impl_1.LeadsServiceImpl,
    }, {
        provide: operateur_service_1.OPERATEUR_SERVICE,
        useClass: operateur_service_impl_1.OperateurServiceImpl,
    }, {
        provide: organisation_service_1.ORGANISATION_SERVICE,
        useClass: organisation_service_impl_1.OrganisationServiceImpl,
    }, {
        provide: pdv_service_1.PDV_SERVICE,
        useClass: pdv_service_impl_1.PdvServiceImpl,
    }, {
        provide: update_user_service_1.UPDATE_USER_SERVICE,
        useClass: update_user_service_impl_1.UpdateUserServiceImpl,
    }, {
        provide: wallet_service_1.WALLET_SERVICE,
        useClass: wallet_service_impl_1.WalletServiceImpl,
    }, {
        provide: wallet_pdv_service_1.WALLET_PDV_SERVICE,
        useClass: wallet_pdv_service_impl_1.WalletPdvServiceImpl,
    }
    // ,{
    //     provide : REPORTS_SERVICE, 
    //     useClass : ReportsServiceImpl,
    // }
];
//# sourceMappingURL=index.js.map