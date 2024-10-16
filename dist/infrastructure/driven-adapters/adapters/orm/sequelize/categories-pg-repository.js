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
exports.CategoriesPgRepositoryAdapter = void 0;
const categories_pg_1 = require("./models/categories-pg");
class CategoriesPgRepositoryAdapter {
    CategoriesRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield categories_pg_1.CategoriesModelPg.findAll({
                attributes: { exclude: ['password'] } // Exclure le champ password
            });
        });
    }
    getCategoriesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield categories_pg_1.CategoriesModelPg.findOne({
                where: { id }
            });
        });
    }
    getCategoriesByLabel(label) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield categories_pg_1.CategoriesModelPg.findOne({
                where: { label }
            });
        });
    }
}
exports.CategoriesPgRepositoryAdapter = CategoriesPgRepositoryAdapter;
//# sourceMappingURL=categories-pg-repository.js.map