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
exports.AddUserRepositoryImpl = exports.ADD_USER_REPOSITORY = void 0;
const pg_1 = require("pg");
exports.ADD_USER_REPOSITORY = "ADD_USER_REPOSITORY";
class AddUserRepositoryImpl {
    constructor() {
        this.pool = new pg_1.Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'pfe_db',
            password: 'admin',
            port: 5432, // ou un autre port si nécessaire
        });
    }
    addUserRepository(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, name } = data;
            const result = yield this.pool.query(`INSERT INTO "user" (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, password`, [email, password, name]);
            return result.rows[0];
        });
    }
}
exports.AddUserRepositoryImpl = AddUserRepositoryImpl;
//# sourceMappingURL=add-user-repository.js.map