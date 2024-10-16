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
exports.OperateurRepositoryImpl = exports.OPERATEUR_REPOSITORY = void 0;
const operateur_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/operateur-pg");
exports.OPERATEUR_REPOSITORY = "OPERATEUR_REPOSITORY";
class OperateurRepositoryImpl {
    operateurRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
            return yield operateur_pg_1.OpeerateurModelPg.findAll();
        });
    }
    //filter par id 
    getOperateurById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield operateur_pg_1.OpeerateurModelPg.findOne({
                where: { id }
            });
        });
    }
    //filter par id bill 
    getOperateurByIdOperateur(id_operateur) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield operateur_pg_1.OpeerateurModelPg.findOne({
                where: { id_operateur }
            });
        });
    }
    //filter par id user
    getOperateurByIdOperateurTopup(id_operateur_topup) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield operateur_pg_1.OpeerateurModelPg.findOne({
                where: { id_operateur_topup }
            });
        });
    }
    //  Filtrer par organizationId
    getOperateurByLibelle(libelle) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield operateur_pg_1.OpeerateurModelPg.findAll({
                where: { libelle: libelle }
            });
        });
    }
}
exports.OperateurRepositoryImpl = OperateurRepositoryImpl;
//# sourceMappingURL=operateur-repository.js.map