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
exports.AlimentationCommercialWalletPgRepositoryAdapter = void 0;
const alimentation_commercial_wallet_pg_1 = require("./models/alimentation-commercial-wallet-pg");
class AlimentationCommercialWalletPgRepositoryAdapter {
    alimentationCommercialWalletRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield alimentation_commercial_wallet_pg_1.AlimentationCommercialWalletModelPg.findAll({
                attributes: { exclude: ['password'] } // Exclure le champ password
            });
        });
    }
    //  méthode pour récupérer les données triées par montant ass
    getAlimentationCommercialWalletSortedByMontantAS() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield alimentation_commercial_wallet_pg_1.AlimentationCommercialWalletModelPg.findAll({
                order: [['montant', 'ASC']], // Tri par montant en ordre ascendant
            });
        });
    }
    getAlimentationCommercialWalletSortedByMontantDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre décroissant
            return yield alimentation_commercial_wallet_pg_1.AlimentationCommercialWalletModelPg.findAll({
                order: [['montant', 'DESC']]
            });
        });
    }
    // Nouvelle méthode pour récupérer les enregistrements où status = 3
    getAlimentationCommercialWalletByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield alimentation_commercial_wallet_pg_1.AlimentationCommercialWalletModelPg.findAll({
                where: {
                    status: status // Filtre sur le status
                }
            });
        });
    }
    countAlimentationCommercialWalletByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield alimentation_commercial_wallet_pg_1.AlimentationCommercialWalletModelPg.count({
                where: { status: status }
            });
        });
    }
    getAlimentationCommercialWalletById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield alimentation_commercial_wallet_pg_1.AlimentationCommercialWalletModelPg.findOne({
                where: { id }
            });
        });
    }
}
exports.AlimentationCommercialWalletPgRepositoryAdapter = AlimentationCommercialWalletPgRepositoryAdapter;
//# sourceMappingURL=alimentation-commercial-wallet-pg-repository-adapter.js.map