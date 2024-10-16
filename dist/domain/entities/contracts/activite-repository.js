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
exports.ActiviteRepositoryImpl = exports.ACTIVITE_REPOSITORY = void 0;
const activite_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/activite-pg");
exports.ACTIVITE_REPOSITORY = "ACTIVITE_REPOSITORY";
class ActiviteRepositoryImpl {
    activiteRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
            return yield activite_pg_1.ActiviteModelPg.findAll();
        });
    }
}
exports.ActiviteRepositoryImpl = ActiviteRepositoryImpl;
//# sourceMappingURL=activite-repository.js.map