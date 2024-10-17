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
exports.JwtAdapter = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config({ path: ".env" });
class JwtAdapter {
    constructor(roles) {
        this.roles = roles;
    }
    encrypt(text, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = { id: text, roles: roles }; // Vous devriez utiliser 'roles' dans le payload
            return jsonwebtoken_1.default.sign({ account: payload }, process.env.JWT_SECRET, { expiresIn: "1d" });
        });
    }
    accessResource(context) {
        try {
            const request = context.getHttp().getRequest();
            const token = request.rawHeaders[1].split(" ")[1]; // Méthode pour extraire le token
            if (token) {
                const decode = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET); // Assurez-vous que le type est défini
                const userRoles = decode.account.roles; // Corrigez cela pour récupérer les rôles de l'utilisateur
                // Vérifiez si l'un des rôles de l'utilisateur est dans les rôles requis
                return userRoles.some((role) => this.roles.includes(role));
            }
        }
        catch (e) {
            console.error('Error verifying token:', e); // Ajoutez des logs pour le débogage
            return false;
        }
        return false; // Si pas de token, retournez false
    }
}
exports.JwtAdapter = JwtAdapter;
//# sourceMappingURL=jwt-adapter.js.map