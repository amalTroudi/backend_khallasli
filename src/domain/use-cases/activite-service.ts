import { ActiviteModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/activite-pg";

export const ACTIVITE_SERVICE = "ACTIVITE_SERVICE";

export interface IActiviteService {
    activiteService: () => Promise<ActiviteModelPg[]>
}