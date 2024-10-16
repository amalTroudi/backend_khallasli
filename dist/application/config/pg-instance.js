"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgConfiguration = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const core_1 = require("@tsclean/core");
const environment_1 = require("@/application/config/environment");
const user_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg");
const activite_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/activite-pg");
const alimentation_commercial_pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-pdv-pg");
const alimentation_commercial_wallet_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-wallet-pg");
const bill_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/bill-pg");
const categories_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/categories-pg");
const demande_alimentation_pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/demande-alimentation-pdv-pg");
const history_wallet_pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/history-wallet-pdv-pg");
const leads_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/leads-pg");
const operateur_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/operateur-pg");
const organisation_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/organisation-pg");
const pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-pg");
const wallet_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pg");
const wallet_pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pdv-pg");
/**
 * Class that generates a connection instance for Pg using the Singleton pattern
 */
class PgConfiguration {
    constructor() {
        this.logger = new core_1.Logger(PgConfiguration.name);
        this.sequelize = new sequelize_typescript_1.Sequelize(environment_1.CONFIG_PG.database, environment_1.CONFIG_PG.user, environment_1.CONFIG_PG.password, {
            host: environment_1.CONFIG_PG.host,
            dialect: "postgres",
            // This array contains all the system models that are used for Pg.
            models: [
                user_pg_1.UserModelPg,
                activite_pg_1.ActiviteModelPg,
                alimentation_commercial_pdv_pg_1.AlimentationCommercialPdvModelPg,
                alimentation_commercial_wallet_pg_1.AlimentationCommercialWalletModelPg,
                bill_pg_1.BillModelPg,
                categories_pg_1.CategoriesModelPg,
                demande_alimentation_pdv_pg_1.DemandeAlimentationPdvModelPg,
                history_wallet_pdv_pg_1.HistoryWalletPdvModelPg,
                leads_pg_1.leadsModelPg,
                operateur_pg_1.OpeerateurModelPg,
                organisation_pg_1.OrganisationModelPg,
                pdv_pg_1.PdvModelPg,
                wallet_pg_1.WalletModelPg,
                wallet_pdv_pg_1.WalletPdvModelPg,
                // ReportsModelPg  , 
            ]
        });
    }
    static getInstance() {
        if (!PgConfiguration.instance) {
            PgConfiguration.instance = new PgConfiguration();
        }
        return PgConfiguration.instance;
    }
    managerConnectionPg() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.sequelize.authenticate();
                this.logger.log(`Connection successfully to database of Pg: ${environment_1.CONFIG_PG.database}`);
            }
            catch (error) {
                this.logger.error("Failed to connect to Pg", error);
            }
        });
    }
}
exports.PgConfiguration = PgConfiguration;
//# sourceMappingURL=pg-instance.js.map