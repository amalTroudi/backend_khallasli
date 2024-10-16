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
exports.WalletPdvPgRepositoryAdapter = void 0;
const wallet_pdv_pg_1 = require("./models/wallet-pdv-pg");
class WalletPdvPgRepositoryAdapter {
    walletPdvRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
            return yield wallet_pdv_pg_1.WalletPdvModelPg.findAll();
        });
    }
    //filter par id 
    getWalletPdvById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_pdv_pg_1.WalletPdvModelPg.findOne({
                where: { id }
            });
        });
    }
    //filter par id wallet
    getWalletPdvByIdWallet(id_wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_pdv_pg_1.WalletPdvModelPg.findOne({
                where: { id_wallet }
            });
        });
    }
    //filter par id commercial
    getWalletPdvByIdCompany(companyid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_pdv_pg_1.WalletPdvModelPg.findOne({
                where: { companyid }
            });
        });
    }
    getWalletPdvByIdPdv(id_pdv) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_pdv_pg_1.WalletPdvModelPg.findOne({
                where: { id_pdv }
            });
        });
    }
    getWalletPdvByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_pdv_pg_1.WalletPdvModelPg.findOne({
                where: { status }
            });
        });
    }
    countWalletPdv() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_pdv_pg_1.WalletPdvModelPg.count();
        });
    }
}
exports.WalletPdvPgRepositoryAdapter = WalletPdvPgRepositoryAdapter;
//# sourceMappingURL=wallet-pdv-pg-repository-adapter.js.map