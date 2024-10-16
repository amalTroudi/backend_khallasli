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
exports.PdvRepositoryImpl = exports.PDV_REPOSITORY = void 0;
const pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-pg");
const pg_1 = require("pg");
exports.PDV_REPOSITORY = "PDV_REPOSITORY";
class PdvRepositoryImpl {
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
    constructor() {
        this.pool = new pg_1.Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'pfe_db',
            password: 'admin',
            port: 5432,
        });
    }
    addPdvRepository(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat } = data;
            const result = yield this.pool.query(`INSERT INTO "pdv" (id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
             RETURNING id, id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat`, [id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat]);
            return result.rows[0];
        });
    }
    // mise à jour d'un pdv
    updatePDVRepository(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat } = data;
            const result = yield this.pool.query(`UPDATE "pdv" 
             SET id_pdv = COALESCE($1, id_pdv), 
                 id_commercial = COALESCE($2, id_commercial), 
                 pos = COALESCE($3, pos), 
                 code_comptable = COALESCE($4, code_comptable), 
                 ville = COALESCE($5, ville), 
                 dt = COALESCE($6, dt), 
                 id_categorie = COALESCE($7, id_categorie), 
                 region = COALESCE($8, region), 
                 etat = COALESCE($9, etat) 
             WHERE id = $10 
             RETURNING id, id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat`, [id_pdv, id_commercial, pos, code_comptable, ville, dt, id_categorie, region, etat, id]);
            if (result.rowCount === 0) {
                throw new Error(`PDV with id ${id} not found`);
            }
            return result.rows[0];
        });
    }
}
exports.PdvRepositoryImpl = PdvRepositoryImpl;
//# sourceMappingURL=pdv-repository.js.map