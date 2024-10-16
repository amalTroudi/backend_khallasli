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
exports.AlimentationCommercialPdvController = void 0;
const alimentation_commercial_pdv_service_1 = require("@/domain/use-cases/alimentation-commercial-pdv-service");
const core_1 = require("@tsclean/core");
let AlimentationCommercialPdvController = class AlimentationCommercialPdvController {
    constructor(alimentationCommercialPdvService) {
        this.alimentationCommercialPdvService = alimentationCommercialPdvService;
        this.route = '/alimentaionCommercialPdv';
    }
    initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.post('/alimentaionCommercialPdv', this.alimentationCommercialPdvController.bind(this));
    }
    alimentationCommercialPdvController() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alimentationCommercialPdvService.alimentationCommercialPdvService();
        });
    }
    getAlimentationCommercialPdvSortedByMontantAs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alimentationCommercialPdvService.getAlimentationCommercialPdvSortedByMontantAs();
        });
    }
    getAlimentationCommercialPdvSortedByMontantDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
            return yield this.alimentationCommercialPdvService.getAlimentationCommercialPdvSortedByMontantDesc();
        });
    }
    // Nouveau point de terminaison pour récupérer les enregistrements où status = 3
    getByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            // Ajout d'une vérification pour s'assurer que status est bien défini
            if (status === undefined || status === null) {
                throw new Error("Le paramètre status est manquant ou invalide");
            }
            return yield this.alimentationCommercialPdvService.getAlimentationCommercialPdvByStatus(status);
        });
    }
    countByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alimentationCommercialPdvService.countAlimentationCommercialPdvByStatus(status);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alimentationCommercialPdvService.getAlimentationCommercialPdvById(id);
        });
    }
};
exports.AlimentationCommercialPdvController = AlimentationCommercialPdvController;
__decorate([
    (0, core_1.Get)("/all")
    // @Auth(["admin", "guest"])
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlimentationCommercialPdvController.prototype, "alimentationCommercialPdvController", null);
__decorate([
    (0, core_1.Get)('/sortedByMontantAs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlimentationCommercialPdvController.prototype, "getAlimentationCommercialPdvSortedByMontantAs", null);
__decorate([
    (0, core_1.Get)('/desc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlimentationCommercialPdvController.prototype, "getAlimentationCommercialPdvSortedByMontantDesc", null);
__decorate([
    (0, core_1.Get)("/:status"),
    __param(0, (0, core_1.Param)("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlimentationCommercialPdvController.prototype, "getByStatus", null);
__decorate([
    (0, core_1.Get)("/count/:status"),
    __param(0, (0, core_1.Param)("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlimentationCommercialPdvController.prototype, "countByStatus", null);
__decorate([
    (0, core_1.Get)('/:id'),
    __param(0, (0, core_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlimentationCommercialPdvController.prototype, "getById", null);
exports.AlimentationCommercialPdvController = AlimentationCommercialPdvController = __decorate([
    (0, core_1.Mapping)('/alimentaionCommercialPdv'),
    __param(0, (0, core_1.Adapter)(alimentation_commercial_pdv_service_1.ALIMENTATION_COMMERCIAL_PDV_SERVICE)),
    __metadata("design:paramtypes", [Object])
], AlimentationCommercialPdvController);
//# sourceMappingURL=alimentation-commercial-pdv-controller.js.map