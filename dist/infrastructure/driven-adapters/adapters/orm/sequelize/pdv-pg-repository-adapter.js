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
exports.PdvPgRepositoryAdapter = void 0;
const pdv_pg_1 = require("./models/pdv-pg");
class PdvPgRepositoryAdapter {
    map(data) {
        const { id, name, email, password, role } = data;
        return Object.assign({}, { id: id.toString(), name, email, password, role });
    }
    pdvRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
            return yield pdv_pg_1.PdvModelPg.findAll();
        });
    }
    //filter par id 
    getPdvById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pdv_pg_1.PdvModelPg.findOne({
                where: { id }
            });
        });
    }
    //filter par id bill 
    getPdvByIdPdv(id_bill) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pdv_pg_1.PdvModelPg.findOne({
                where: { id_bill }
            });
        });
    }
    //filter par id user
    getPdvByIdCommercial(id_commercial) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pdv_pg_1.PdvModelPg.findOne({
                where: { id_commercial }
            });
        });
    }
    getPdvByIdCategorie(id_categorie) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pdv_pg_1.PdvModelPg.findOne({
                where: { id_categorie }
            });
        });
    }
    //  Filtrer par organizationId
    getPdvByVille(ville) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pdv_pg_1.PdvModelPg.findAll({
                where: { ville: ville }
            });
        });
    }
    getPdvByRegion(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pdv_pg_1.PdvModelPg.findAll({
                where: { region: region }
            });
        });
    }
    getPdvByCodeComptable(code_comptable) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pdv_pg_1.PdvModelPg.findAll({
                where: { code_comptable: code_comptable }
            });
        });
    }
    addPdvRepository(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pdv_pg_1.PdvModelPg.create(data);
        });
    }
    deletePdvRepository(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pdv = yield pdv_pg_1.PdvModelPg.findByPk(id);
            if (!pdv) {
                throw new Error(`User with id ${id} not found`);
            }
            yield pdv.destroy();
        });
    }
    //  mise à jour d'un utilisateur
    updatePdvRepository(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const pdv = yield pdv_pg_1.PdvModelPg.findByPk(id);
            if (!pdv) {
                throw new Error(`User with id ${id} not found`);
            }
            yield pdv.update(data);
            return this.map(pdv);
        });
    }
}
exports.PdvPgRepositoryAdapter = PdvPgRepositoryAdapter;
//# sourceMappingURL=pdv-pg-repository-adapter.js.map