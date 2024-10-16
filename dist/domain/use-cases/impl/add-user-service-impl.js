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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserServiceImpl = void 0;
const user_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg");
const bcrypt_1 = __importDefault(require("bcrypt"));
class AddUserServiceImpl {
    addUserService(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, roles } = data; // Déstructurer les données
            try {
                // Hacher le mot de passe pour plus de sécurité
                const hashedPassword = yield bcrypt_1.default.hash(password, 10);
                // Créer un nouvel utilisateur dans la base de données
                const newUser = yield user_pg_1.UserModelPg.create({
                    name,
                    email,
                    password: hashedPassword,
                    roles,
                    created_at: new Date(),
                    updated_at: new Date(),
                });
                return newUser; // Retourner l'utilisateur créé
            }
            catch (error) {
                throw new Error('Erreur lors de l\'ajout de l\'utilisateur : ' + error.message);
            }
        });
    }
}
exports.AddUserServiceImpl = AddUserServiceImpl;
//# sourceMappingURL=add-user-service-impl.js.map