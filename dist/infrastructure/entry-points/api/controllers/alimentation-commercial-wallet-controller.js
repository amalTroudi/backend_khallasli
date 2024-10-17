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
exports.AlimentationCommercialWalletController = void 0;
const alimentation_commercial_wallet_service_1 = require("@/domain/use-cases/alimentation-commercial-wallet-service");
const alimentation_commercial_wallet_service_impl_1 = require("@/domain/use-cases/impl/alimentation-commercial-wallet-service-impl");
const core_1 = require("@tsclean/core");
let AlimentationCommercialWalletController = class AlimentationCommercialWalletController {
    constructor(alimentationCommercialWalletService) {
        this.alimentationCommercialWalletService = alimentationCommercialWalletService;
        this.route = '/alimentaionCommercialWallet';
    }
    initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.post('/alimentaionCommercialPdv', this.alimentationCommercialWalletController.bind(this));
    }
    alimentationCommercialWalletController() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alimentationCommercialWalletService.alimentationCommercialWalletService();
        });
    }
    getAlimentationCommercialWalletSortedByMontantAs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alimentationCommercialWalletService.getAlimentationCommercialWalletSortedByMontantAs();
        });
    }
    getAlimentationCommercialWalletSortedByMontantDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
            return yield this.alimentationCommercialWalletService.getAlimentationCommercialWalletSortedByMontantDesc();
        });
    }
    // Nouveau point de terminaison pour récupérer les enregistrements où status = 3
    getByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            // Ajout d'une vérification pour s'assurer que status est bien défini
            if (status === undefined || status === null) {
                throw new Error("Le paramètre status est manquant ou invalide");
            }
            return yield this.alimentationCommercialWalletService.getAlimentationCommercialWalletByStatus(status);
        });
    }
    countByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alimentationCommercialWalletService.countAlimentationCommercialWalletByStatus(status);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alimentationCommercialWalletService.getAlimentationCommercialWalletById(id);
        });
    }
};
exports.AlimentationCommercialWalletController = AlimentationCommercialWalletController;
__decorate([
    (0, core_1.Get)("/all")
    // @Auth(["admin", "guest"])
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlimentationCommercialWalletController.prototype, "alimentationCommercialWalletController", null);
__decorate([
    (0, core_1.Get)('/sortedByMontantAs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlimentationCommercialWalletController.prototype, "getAlimentationCommercialWalletSortedByMontantAs", null);
__decorate([
    (0, core_1.Get)('/desc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlimentationCommercialWalletController.prototype, "getAlimentationCommercialWalletSortedByMontantDesc", null);
__decorate([
    (0, core_1.Get)("/:status"),
    __param(0, (0, core_1.Param)("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlimentationCommercialWalletController.prototype, "getByStatus", null);
__decorate([
    (0, core_1.Get)("/count/:status"),
    __param(0, (0, core_1.Param)("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlimentationCommercialWalletController.prototype, "countByStatus", null);
__decorate([
    (0, core_1.Get)('/:id'),
    __param(0, (0, core_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlimentationCommercialWalletController.prototype, "getById", null);
exports.AlimentationCommercialWalletController = AlimentationCommercialWalletController = __decorate([
    (0, core_1.Mapping)('/alimentaionCommercialWallet'),
    __param(0, (0, core_1.Inject)(alimentation_commercial_wallet_service_1.ALIMENTATION_COMMERCIAL_WALLET_SERVICE)),
    __metadata("design:paramtypes", [alimentation_commercial_wallet_service_impl_1.AlimentationCommercialWalletServiceImpl])
], AlimentationCommercialWalletController);
//# sourceMappingURL=alimentation-commercial-wallet-controller.js.map