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
exports.OrganisationRepositoryImpl = exports.ORGANISATION_REPOSITORY = void 0;
const organisation_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/organisation-pg");
exports.ORGANISATION_REPOSITORY = "ORGANISATION_REPOSITORY";
class OrganisationRepositoryImpl {
    organisationRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
            return yield organisation_pg_1.OrganisationModelPg.findAll();
        });
    }
    //filter par id 
    getOrganisationById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield organisation_pg_1.OrganisationModelPg.findOne({
                where: { id }
            });
        });
    }
    //filter par id bill 
    getOrganisationByIdOrganisation(id_organisation) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield organisation_pg_1.OrganisationModelPg.findOne({
                where: { id_organisation }
            });
        });
    }
    //  Filtrer par organizationId
    getOrganisationByLibelle(libelle) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield organisation_pg_1.OrganisationModelPg.findAll({
                where: { libelle: libelle }
            });
        });
    }
}
exports.OrganisationRepositoryImpl = OrganisationRepositoryImpl;
//# sourceMappingURL=organisation-repository.js.map