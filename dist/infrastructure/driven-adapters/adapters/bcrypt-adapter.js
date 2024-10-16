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
exports.BcryptAdapter = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class BcryptAdapter {
    constructor() {
        this.salt = 12;
    }
    // Méthode pour comparer le texte avec le mot de passe haché
    compare(text, hashedPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield bcrypt_1.default.compare(text, hashedPassword);
            }
            catch (error) {
                console.error("Error during password comparison:", error);
                return false;
            }
        });
    }
    // Méthode pour hacher le texte (mot de passe)
    hash(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield bcrypt_1.default.hash(text, this.salt);
            }
            catch (error) {
                console.error("Error during password hashing:", error);
                throw new Error("Hashing failed");
            }
        });
    }
}
exports.BcryptAdapter = BcryptAdapter;
//# sourceMappingURL=bcrypt-adapter.js.map