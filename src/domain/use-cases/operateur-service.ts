import { leadsModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/leads-pg";
import { OpeerateurModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/operateur-pg";

export const OPERATEUR_SERVICE = "OPERATEUR_SERVICE";

export interface IOperateurService {
    operateurService: () => Promise<OpeerateurModelPg[]>,
    getOperateurById: (id: number) => Promise<OpeerateurModelPg | null>;
    getOperateurByIdOperateur: (id_operateur: string) => Promise<OpeerateurModelPg | null>;
    getOperateurByIdOperateurTopup: (id_operateur_topup: string) => Promise<OpeerateurModelPg | null>;
    getOperateurByLibelle :(libelle: string)=> Promise<OpeerateurModelPg[]>

}