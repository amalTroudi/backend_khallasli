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
exports.BillPgRepositoryAdapter = void 0;
const bill_pg_1 = require("./models/bill-pg");
class BillPgRepositoryAdapter {
    billRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bill_pg_1.BillModelPg.findAll({
                attributes: { exclude: ['password'] } // Exclure le champ password
            });
        });
    }
    //  méthode pour récupérer les données triées par amount ass
    getBillSortedByAmountAS() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bill_pg_1.BillModelPg.findAll({
                order: [['amount', 'ASC']], // Tri par montant en ordre ascendant
            });
        });
    }
    getBillSortedByAmountDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par amount en ordre décroissant
            return yield bill_pg_1.BillModelPg.findAll({
                order: [['amount', 'DESC']]
            });
        });
    }
    getBillById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bill_pg_1.BillModelPg.findOne({
                where: { id }
            });
        });
    }
    getBillByIdBill(id_bill) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bill_pg_1.BillModelPg.findOne({
                where: { id_bill }
            });
        });
    }
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
exports.BillPgRepositoryAdapter = BillPgRepositoryAdapter;
//# sourceMappingURL=bill-pg-repository.js.map