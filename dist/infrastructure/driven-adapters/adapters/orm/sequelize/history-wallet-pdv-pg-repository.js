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
exports.HistoryWalletPdvPgRepositoryAdapter = void 0;
const history_wallet_pdv_pg_1 = require("./models/history-wallet-pdv-pg");
class HistoryWalletPdvPgRepositoryAdapter {
    historyWalletPdvRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
            return yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findAll();
        });
    }
    getHistoryWalletPdvSortedByOldAS() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre ascendant
            return yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findAll({
                order: [['old_balance', 'ASC']]
            });
        });
    }
    getHistoryWalletPdvSortedByOldDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre décroissant
            return yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findAll({
                order: [['old_balance', 'DESC']]
            });
        });
    }
    getHistoryWalletPdvSortedByNewAS() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre ascendant
            return yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findAll({
                order: [['new_balance', 'ASC']]
            });
        });
    }
    getHistoryWalletPdvSortedByNewDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre décroissant
            return yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findAll({
                order: [['new_balance', 'DESC']]
            });
        });
    }
    getHistoryWalletPdvSortedByDebitAS() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre ascendant
            return yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findAll({
                order: [['debit', 'ASC']]
            });
        });
    }
    getHistoryWalletPdvSortedByDebitDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre décroissant
            return yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findAll({
                order: [['debit', 'DESC']]
            });
        });
    }
    getHistoryWalletPdvSortedByPuvAS() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre ascendant
            return yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findAll({
                order: [['puv', 'ASC']]
            });
        });
    }
    getHistoryWalletPdvSortedByPuvDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre décroissant
            return yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findAll({
                order: [['puv', 'DESC']]
            });
        });
    }
    getHistoryWalletPdvById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findOne({
                where: { id }
            });
        });
    }
    getHistoryWalletPdvByIdHistory(id_history) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findOne({
                where: { id_history }
            });
        });
    }
    getHistoryWalletPdvByIdWallet(id_wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findOne({
                where: { id_wallet }
            });
        });
    }
    getHistoryWalletPdvByService(service) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findOne({
                where: { service }
            });
        });
    }
}
exports.HistoryWalletPdvPgRepositoryAdapter = HistoryWalletPdvPgRepositoryAdapter;
//# sourceMappingURL=history-wallet-pdv-pg-repository.js.map