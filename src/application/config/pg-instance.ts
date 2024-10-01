import { Sequelize } from "sequelize-typescript";

import { Logger } from "@tsclean/core";
import { CONFIG_PG } from "@/application/config/environment";
import { UserModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg";
import { ActiviteModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/activite-pg";
import { AlimentationCommercialPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-pdv-pg";
import { AlimentationCommercialWalletModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-wallet-pg";
import { BillModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/bill-pg";
import { CategoriesModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/categories-pg";
import { DemandeAlimentationPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/demande-alimentation-pdv-pg";
import { HistoryWalletPdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/history-wallet-pdv-pg";
import { leadsModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/leads-pg";
import { OpeerateurModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/operateur-pg";
import { OrganisationModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/organisation-pg";
import { PdvModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-pg";
import { ReportsModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/reports-pg";

/**
 * Class that generates a connection instance for Pg using the Singleton pattern
 */
export class PgConfiguration {
  private logger: Logger;
  private static instance: PgConfiguration;

  public sequelize: Sequelize;

  private constructor() {
    this.logger = new Logger(PgConfiguration.name);
    this.sequelize = new Sequelize(
      CONFIG_PG.database,
      CONFIG_PG.user,
      CONFIG_PG.password,
      {
        host: CONFIG_PG.host,
        dialect: "postgres",
        // This array contains all the system models that are used for Pg.
        models: [
          UserModelPg ,
          ActiviteModelPg , 
          AlimentationCommercialPdvModelPg , 
          AlimentationCommercialWalletModelPg ,
          BillModelPg , 
          CategoriesModelPg , 
          DemandeAlimentationPdvModelPg , 
          HistoryWalletPdvModelPg , 
          leadsModelPg , 
          OpeerateurModelPg , 
          OrganisationModelPg , 
          PdvModelPg , 
          ReportsModelPg 
        ]
      }
    );
  }

  public static getInstance(): PgConfiguration {
    if (!PgConfiguration.instance) {
      PgConfiguration.instance = new PgConfiguration();
    }
    return PgConfiguration.instance;
  }

  public async managerConnectionPg(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      this.logger.log(
        `Connection successfully to database of Pg: ${CONFIG_PG.database}`
      );
    } catch (error) {
      this.logger.error("Failed to connect to Pg", error);
    }
  }
}
