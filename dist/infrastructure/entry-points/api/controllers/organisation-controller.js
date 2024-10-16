"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.OrganisationController = void 0;
const organisation_service_1 = require("@/domain/use-cases/organisation-service");
const core_1 = require("@tsclean/core");
let OrganisationController = class OrganisationController {
    constructor(organisationService) {
        this.organisationService = organisationService;
        this.route = '/organisation';
    }
    initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/organisation', this.organisationController.bind(this));
    }
    organisationController() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.organisationService.organisationService();
        });
    }
    getOrganisationById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.organisationService.getOrganisationById(id);
        });
    }
    getOrganisationByIdOperateur(id_operateur) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.organisationService.getOrganisationByIdOrganisation(id_operateur);
        });
    }
    getOrganisationByLibelle(libelle) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.organisationService.getOrganisationByLibelle(libelle);
        });
    }
};
exports.OrganisationController = OrganisationController;
__decorate([
    (0, core_1.Get)("/all")
    // @Auth(["admin", "guest"])
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrganisationController.prototype, "organisationController", null);
__decorate([
    (0, core_1.Get)('id/:id'),
    __param(0, (0, core_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrganisationController.prototype, "getOrganisationById", null);
__decorate([
    (0, core_1.Get)('id_organisation/:id_organisation'),
    __param(0, (0, core_1.Param)('id_operateur')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrganisationController.prototype, "getOrganisationByIdOperateur", null);
__decorate([
    (0, core_1.Get)('/libelle/:libelle'),
    __param(0, (0, core_1.Param)('libelle')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrganisationController.prototype, "getOrganisationByLibelle", null);
exports.OrganisationController = OrganisationController = __decorate([
    (0, core_1.Mapping)('/organisation'),
    __param(0, (0, core_1.Adapter)(organisation_service_1.ORGANISATION_SERVICE)),
    __metadata("design:paramtypes", [Object])
], OrganisationController);
//# sourceMappingURL=organisation-controller.js.map