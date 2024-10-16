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
exports.WalletController = void 0;
const wallet_service_1 = require("@/domain/use-cases/wallet-service");
const core_1 = require("@tsclean/core");
let WalletController = class WalletController {
    constructor(walletService) {
        this.walletService = walletService;
        this.route = '/wallet';
    }
    initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/wallet', this.walletController.bind(this));
    }
    walletController() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.walletService.walletService();
        });
    }
    getWalletSortedByCreditAs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.walletService.getWalletSortedByCreditAs();
        });
    }
    getWalletSortedByCreditDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
            return yield this.walletService.getWalletSortedByCreditDesc();
        });
    }
    // Nouveau point de terminaison pour récupérer les enregistrements où status = 3
    getByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            // Ajout d'une vérification pour s'assurer que status est bien défini
            if (status === undefined || status === null) {
                throw new Error("Le paramètre status est manquant ou invalide");
            }
            return yield this.walletService.getWalletByStatus(status);
        });
    }
    countByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.walletService.countWallet(status);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.walletService.getWalletById(id);
        });
    }
    getByIdWallet(id_wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.walletService.getWalletByIdWallet(id_wallet);
        });
    }
    getByIdCommercial(id_commercial) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.walletService.getWalletByCommercial(id_commercial);
        });
    }
};
exports.WalletController = WalletController;
__decorate([
    (0, core_1.Get)("/all")
    // @Auth(["admin", "guest"])
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "walletController", null);
__decorate([
    (0, core_1.Get)('/Ass'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getWalletSortedByCreditAs", null);
__decorate([
    (0, core_1.Get)('/desc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getWalletSortedByCreditDesc", null);
__decorate([
    (0, core_1.Get)("/:status"),
    __param(0, (0, core_1.Param)("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getByStatus", null);
__decorate([
    (0, core_1.Get)("/count/:status"),
    __param(0, (0, core_1.Param)("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "countByStatus", null);
__decorate([
    (0, core_1.Get)('/:id'),
    __param(0, (0, core_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getById", null);
__decorate([
    (0, core_1.Get)('/id_wallet/:id_wallet'),
    __param(0, (0, core_1.Param)('id_wallet')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getByIdWallet", null);
__decorate([
    (0, core_1.Get)('/id_commercial/:id_commercial'),
    __param(0, (0, core_1.Param)('id_commercial')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getByIdCommercial", null);
exports.WalletController = WalletController = __decorate([
    (0, core_1.Mapping)('/wallet'),
    __param(0, (0, core_1.Adapter)(wallet_service_1.WALLET_SERVICE)),
    __metadata("design:paramtypes", [Object])
], WalletController);
//# sourceMappingURL=wallet-controller.js.map