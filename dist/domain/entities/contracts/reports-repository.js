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
exports.ReportsRepositoryImpl = exports.REPORTS_REPOSITORY = void 0;
const reports_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/reports-pg");
exports.REPORTS_REPOSITORY = "REPORTS_REPOSITORY";
class ReportsRepositoryImpl {
    getReports() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reports_pg_1.ReportsModelPg.findAll();
        });
    }
    getReportById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reports_pg_1.ReportsModelPg.findOne({
                where: { id }
            });
        });
    }
    getReportByIdReport(id_report) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reports_pg_1.ReportsModelPg.findOne({
                where: { id_report }
            });
        });
    }
    getReportByIdUser(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reports_pg_1.ReportsModelPg.findOne({
                where: { id_user }
            });
        });
    }
    getReportByVille(ville) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reports_pg_1.ReportsModelPg.findAll({
                where: { ville: ville }
            });
        });
    }
    getReportByZone(zone) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reports_pg_1.ReportsModelPg.findAll({
                where: { zone: zone }
            });
        });
    }
    getReportByNomBanque(nom_banque) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reports_pg_1.ReportsModelPg.findAll({
                where: { nom_banque: nom_banque }
            });
        });
    }
}
exports.ReportsRepositoryImpl = ReportsRepositoryImpl;
//# sourceMappingURL=reports-repository.js.map