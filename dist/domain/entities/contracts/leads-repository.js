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
exports.LeadsRepositoryImpl = exports.LEADS_REPOSITORY = void 0;
const leads_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/leads-pg");
exports.LEADS_REPOSITORY = "LEADS_REPOSITORY";
class LeadsRepositoryImpl {
    leadRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
            return yield leads_pg_1.leadsModelPg.findAll();
        });
    }
    //filter par id 
    getLeadById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield leads_pg_1.leadsModelPg.findOne({
                where: { id }
            });
        });
    }
    //filter par id bill 
    getLeadByIdLead(id_lead) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield leads_pg_1.leadsModelPg.findOne({
                where: { id_lead }
            });
        });
    }
    //filter par id user
    getLeadByIdUser(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield leads_pg_1.leadsModelPg.findOne({
                where: { id_user }
            });
        });
    }
    //  Filtrer par organizationId
    getLeadByIdReport(id_report) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield leads_pg_1.leadsModelPg.findAll({
                where: { id_report: id_report }
            });
        });
    }
}
exports.LeadsRepositoryImpl = LeadsRepositoryImpl;
//# sourceMappingURL=leads-repository.js.map