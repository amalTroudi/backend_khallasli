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
exports.GetUsersRepositoryImpl = exports.GET_USERS_REPOSITORY = void 0;
const alimentation_commercial_pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-pdv-pg");
const bill_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/bill-pg");
const pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-pg");
const user_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg");
exports.GET_USERS_REPOSITORY = "GET_USERS_REPOSITORY";
class GetUsersRepositoryImpl {
    // async getUsersRepository(): Promise<UserModelPg[]> {
    //     // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
    //     return await UserModelPg.findAll();
    // }
    getUsersRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_pg_1.UserModelPg.findAll();
            const pdvs = yield pdv_pg_1.PdvModelPg.findAll();
            const bills = yield bill_pg_1.BillModelPg.findAll();
            const alimentation = yield alimentation_commercial_pdv_pg_1.AlimentationCommercialPdvModelPg.findAll(); // Par exemple, pour récupérer les PDVs
            return {
                users,
                pdvs,
                bills,
                alimentation,
                // Vous pouvez ajouter d'autres types de données ici
            };
        });
    }
}
exports.GetUsersRepositoryImpl = GetUsersRepositoryImpl;
//# sourceMappingURL=get-users-repository.js.map