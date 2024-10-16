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
exports.DemandeAlimentationPdvRepositoryImpl = exports.DEMANDE_ALIMENTATION_PDV_REPOSITORY = void 0;
const demande_alimentation_pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/demande-alimentation-pdv-pg");
exports.DEMANDE_ALIMENTATION_PDV_REPOSITORY = "DEMANDE_ALIMENTATION_PDV_REPOSITORY";
class DemandeAlimentationPdvRepositoryImpl {
    demandeAlimentationPdvRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
            return yield demande_alimentation_pdv_pg_1.DemandeAlimentationPdvModelPg.findAll();
        });
    }
    getDemandeAlimentationPdvSortedByMontantAS() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre ascendant
            return yield demande_alimentation_pdv_pg_1.DemandeAlimentationPdvModelPg.findAll({
                order: [['montant', 'ASC']]
            });
        });
    }
    getDemandeAlimentationPdvSortedByMontantDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Récupérer les enregistrements triés par montant en ordre décroissant
            return yield demande_alimentation_pdv_pg_1.DemandeAlimentationPdvModelPg.findAll({
                order: [['montant', 'DESC']]
            });
        });
    }
    // Nouvelle méthode pour récupérer les enregistrements où status = 3
    getDemandeAlimentationPdvByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield demande_alimentation_pdv_pg_1.DemandeAlimentationPdvModelPg.findAll({
                where: {
                    status: status // Filtrer sur le champ status
                }
            });
        });
    }
    countDemandeAlimentationPdvByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield demande_alimentation_pdv_pg_1.DemandeAlimentationPdvModelPg.count({
                where: { status }
            });
        });
    }
    getDemandeAlimentationPdvById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield demande_alimentation_pdv_pg_1.DemandeAlimentationPdvModelPg.findOne({
                where: { id }
            });
        });
    }
    getDemandeAlimentationPdvByIdAlimentation(id_alimentation) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield demande_alimentation_pdv_pg_1.DemandeAlimentationPdvModelPg.findOne({
                where: { id_alimentation }
            });
        });
    }
    getDemandeAlimentationPdvByIdWallet(id_wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield demande_alimentation_pdv_pg_1.DemandeAlimentationPdvModelPg.findOne({
                where: { id_wallet }
            });
        });
    }
    getDemandeAlimentationPdvByBank(bank) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield demande_alimentation_pdv_pg_1.DemandeAlimentationPdvModelPg.findOne({
                where: { bank }
            });
        });
    }
    getDemandeAlimentationPdvByRef(ref) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield demande_alimentation_pdv_pg_1.DemandeAlimentationPdvModelPg.findOne({
                where: { ref }
            });
        });
    }
}
exports.DemandeAlimentationPdvRepositoryImpl = DemandeAlimentationPdvRepositoryImpl;
//# sourceMappingURL=demande-alimentation-pdv-repository.js.map