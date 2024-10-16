"use strict";
// import { AddUserParams, UserEntity } from "../entities/user";
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
exports.UpdateUserRepositoryImpl = exports.UPDATE_USER_REPOSITORY = void 0;
const pg_1 = require("pg");
exports.UPDATE_USER_REPOSITORY = "UPDATE_USER_REPOSITORY";
class UpdateUserRepositoryImpl {
    constructor() {
        this.pool = new pg_1.Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'pfe_db',
            password: 'admin',
            port: 5432, // ou un autre port si nécessaire
        });
    }
    // Implémentation de la méthode pour mettre à jour un utilisateur
    updateUserRepository(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = data;
            const result = yield this.pool.query(`UPDATE "user" SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING id, name, email, password`, [name, email, password, id]);
            if (result.rowCount === 0) {
                throw new Error(`User with id ${id} not found`);
            }
            return result.rows[0];
        });
    }
}
exports.UpdateUserRepositoryImpl = UpdateUserRepositoryImpl;
//# sourceMappingURL=update-user-repository.js.map