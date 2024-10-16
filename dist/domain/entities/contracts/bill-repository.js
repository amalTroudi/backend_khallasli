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
exports.BillRepositoryImpl = exports.BILL_REPOSITORY = void 0;
const bill_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/bill-pg");
exports.BILL_REPOSITORY = "BILL_REPOSITORY";
class BillRepositoryImpl {
    billRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
            return yield bill_pg_1.BillModelPg.findAll();
        });
    }
    getBillSortedByAmountAS() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre ascendant
            return yield bill_pg_1.BillModelPg.findAll({
                order: [['amount', 'ASC']]
            });
        });
    }
    getBillSortedByAmountDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre décroissant
            return yield bill_pg_1.BillModelPg.findAll({
                order: [['amount', 'DESC']]
            });
        });
    }
    //filter par id 
    getBillById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bill_pg_1.BillModelPg.findOne({
                where: { id }
            });
        });
    }
    //filter par id bill 
    getBillByIdBill(id_bill) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bill_pg_1.BillModelPg.findOne({
                where: { id_bill }
            });
        });
    }
    //filter par id user
    getBillByIdUser(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bill_pg_1.BillModelPg.findOne({
                where: { id_user }
            });
        });
    }
    //  Filtrer par organizationId
    getBillByOrganizationId(organisationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bill_pg_1.BillModelPg.findAll({
                where: { organisationid: organisationId }
            });
        });
    }
}
exports.BillRepositoryImpl = BillRepositoryImpl;
//# sourceMappingURL=bill-repository.js.map