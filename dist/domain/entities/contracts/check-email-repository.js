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
exports.CkeckEmailRepositoryImpl = exports.CHECK_EMAIL_REPOSITORY = void 0;
const user_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg");
exports.CHECK_EMAIL_REPOSITORY = "CHECK_EMAIL_REPOSITORY";
class CkeckEmailRepositoryImpl {
    map(data) {
        const { id, name, email, password, role } = data;
        return Object.assign({}, { id: id.toString(), name, email, password, role });
    }
    checkEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_pg_1.UserModelPg.findOne({
                where: { email }
            });
            return user ? this.map(user) : null; // Cela devrait retourner null si l'utilisateur n'existe pas
        });
    }
}
exports.CkeckEmailRepositoryImpl = CkeckEmailRepositoryImpl;
//# sourceMappingURL=check-email-repository.js.map