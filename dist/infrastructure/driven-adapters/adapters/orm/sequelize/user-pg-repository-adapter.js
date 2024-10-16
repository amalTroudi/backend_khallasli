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
exports.UserPgRepositoryAdapter = void 0;
const user_pg_1 = require("./models/user-pg");
class UserPgRepositoryAdapter {
    // Méthode de mapping pour formater les données avant de les retourner
    map(data) {
        const { id, name, email, password, role } = data;
        return Object.assign({}, { id: id.toString(), name, email, password, role });
    }
    // Implémentation de la méthode pour obtenir tous les utilisateurs
    getUsersRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_pg_1.UserModelPg.findAll({
                attributes: { exclude: ['password'] } // Exclure le champ password
            });
        });
    }
    // Implémentation de la méthode pour vérifier si un email existe
    checkEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_pg_1.UserModelPg.findOne({
                where: { email }
            });
            return user ? this.map(user) : null;
        });
    }
    // Implémentation de la mise à jour du token d'accès (access token)
    updateToken(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_pg_1.UserModelPg.update({ accessToken: token }, // Ce que vous voulez mettre à jour
            { where: { id } } // Condition de mise à jour, ici l'id
            );
        });
    }
    // Implémentation de la méthode pour charger un utilisateur à partir du token
    loadToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_pg_1.UserModelPg.findOne({
                where: { id: token } // Recherche par token (ou vous pouvez utiliser un autre champ comme l'accessToken)
            });
            return result ? this.map(result) : null;
        });
    }
    addUserRepository(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_pg_1.UserModelPg.create(data);
        });
    }
    deleteUserRepository(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_pg_1.UserModelPg.findByPk(id);
            if (!user) {
                throw new Error(`User with id ${id} not found`);
            }
            yield user.destroy();
        });
    }
    //  mise à jour d'un utilisateur
    updateUserRepository(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_pg_1.UserModelPg.findByPk(id);
            if (!user) {
                throw new Error(`User with id ${id} not found`);
            }
            yield user.update(data);
            return this.map(user);
        });
    }
}
exports.UserPgRepositoryAdapter = UserPgRepositoryAdapter;
//# sourceMappingURL=user-pg-repository-adapter.js.map