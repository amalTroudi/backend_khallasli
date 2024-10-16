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
exports.AlimentationCommercialWalletRepositoryImpl = exports.ALIMENTATION_COMMERCIAL_WALLET_REPOSITORY = void 0;
const alimentation_commercial_wallet_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-wallet-pg");
exports.ALIMENTATION_COMMERCIAL_WALLET_REPOSITORY = "ALIMENTATION_COMMERCIAL_WALLET_REPOSITORY";
class AlimentationCommercialWalletRepositoryImpl {
    alimentationCommercialWalletRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
            return yield alimentation_commercial_wallet_pg_1.AlimentationCommercialWalletModelPg.findAll();
        });
    }
    getAlimentationCommercialWalletSortedByMontantAS() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre ascendant
            return yield alimentation_commercial_wallet_pg_1.AlimentationCommercialWalletModelPg.findAll({
                order: [['montant', 'ASC']]
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
                    status: status // Filtrer sur le champ status
                }
            });
        });
    }
    countAlimentationCommercialWalletByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield alimentation_commercial_wallet_pg_1.AlimentationCommercialWalletModelPg.count({
                where: { status }
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
exports.AlimentationCommercialWalletRepositoryImpl = AlimentationCommercialWalletRepositoryImpl;
//# sourceMappingURL=alimentation-commercial-wallet-repository.js.map