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
exports.WalletRepositoryImpl = exports.WALLET_REPOSITORY = void 0;
const wallet_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pg");
exports.WALLET_REPOSITORY = "WALLET_REPOSITORY";
class WalletRepositoryImpl {
    walletRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
            return yield wallet_pg_1.WalletModelPg.findAll();
        });
    }
    //filter par id 
    getWalletById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_pg_1.WalletModelPg.findOne({
                where: { id }
            });
        });
    }
    //filter par id wallet
    getWalletByIdWallet(id_wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_pg_1.WalletModelPg.findOne({
                where: { id_wallet }
            });
        });
    }
    //filter par id commercial
    getWalletByIdCommercial(id_commercial) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_pg_1.WalletModelPg.findOne({
                where: { id_commercial }
            });
        });
    }
    getWalletByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_pg_1.WalletModelPg.findOne({
                where: { status }
            });
        });
    }
    getWalletSortedByCreditAs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_pg_1.WalletModelPg.findAll({
                order: [['credit_commercial', 'ASC']], // Tri par montant en ordre ascendant
            });
        });
    }
    getWalletSortedByCreditDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre décroissant
            return yield wallet_pg_1.WalletModelPg.findAll({
                order: [['credit_commercial', 'DESC']]
            });
        });
    }
    countWalletBystatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_pg_1.WalletModelPg.count({
                where: { status }
            });
        });
    }
}
exports.WalletRepositoryImpl = WalletRepositoryImpl;
//# sourceMappingURL=wallet-repository.js.map