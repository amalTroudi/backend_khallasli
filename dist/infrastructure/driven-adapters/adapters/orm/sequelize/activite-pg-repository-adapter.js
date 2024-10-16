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
exports.ActivitePgRepositoryAdapter = void 0;
const activite_pg_1 = require("./models/activite-pg");
class ActivitePgRepositoryAdapter {
    activiteRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield activite_pg_1.ActiviteModelPg.findAll({
                attributes: { exclude: ['password'] } // Exclure le champ password
            });
        });
    }
}
exports.ActivitePgRepositoryAdapter = ActivitePgRepositoryAdapter;
//# sourceMappingURL=activite-pg-repository-adapter.js.map