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
exports.HistoryWalletPdvController = void 0;
const history_wallet_pdv_service_1 = require("@/domain/use-cases/history-wallet-pdv-service");
const core_1 = require("@tsclean/core");
let HistoryWalletPdvController = class HistoryWalletPdvController {
    constructor(historyWalletPdvService) {
        this.historyWalletPdvService = historyWalletPdvService;
        this.route = '/historyWalletPdv';
    }
    initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/historyWalletPdv', this.historyWalletPdvController.bind(this));
    }
    historyWalletPdvController() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.historyWalletPdvService.historyWalletPdvService();
        });
    }
    getHistoryWalletPdvSortedByOldAs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.historyWalletPdvService.getHistoryWalletPdvSortedByOldAS();
        });
    }
    getHistoryWalletPdvSortedByOldDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
            return yield this.historyWalletPdvService.getHistoryWalletPdvSortedByOldDesc();
        });
    }
    getHistoryWalletPdvSortedByNewAs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.historyWalletPdvService.getHistoryWalletPdvSortedByNewAS();
        });
    }
    getHistoryWalletPdvSortedByNewDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
            return yield this.historyWalletPdvService.getHistoryWalletPdvSortedByNewDesc();
        });
    }
    getHistoryWalletPdvSortedByDebitAs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.historyWalletPdvService.getHistoryWalletPdvSortedByDebitAS();
        });
    }
    getHistoryWalletPdvSortedByMontantDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
            return yield this.historyWalletPdvService.getHistoryWalletPdvSortedByDebitDesc();
        });
    }
    getHistoryWalletPdvSortedByPuvtAs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.historyWalletPdvService.getHistoryWalletPdvSortedByPuvAS();
        });
    }
    getHistoryWalletPdvSortedByPuvDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
            return yield this.historyWalletPdvService.getHistoryWalletPdvSortedByPuvDesc();
        });
    }
    // Nouveau point de terminaison pour récupérer les enregistrements où status = 3
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.historyWalletPdvService.getHistoryWalletPdvById(id);
        });
    }
    getByIdHistory(id_history) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.historyWalletPdvService.getHistoryWalletPdvByIdHistory(id_history);
        });
    }
    getByIdWallet(id_wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.historyWalletPdvService.getHistoryWalletPdvByIdWallet(id_wallet);
        });
    }
    getByService(service) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.historyWalletPdvService.getHistoryWalletPdvByService(service);
        });
    }
};
exports.HistoryWalletPdvController = HistoryWalletPdvController;
__decorate([
    (0, core_1.Get)("/all")
    // @Auth(["admin", "guest"])
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HistoryWalletPdvController.prototype, "historyWalletPdvController", null);
__decorate([
    (0, core_1.Get)('/oldAs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HistoryWalletPdvController.prototype, "getHistoryWalletPdvSortedByOldAs", null);
__decorate([
    (0, core_1.Get)('/descOld'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HistoryWalletPdvController.prototype, "getHistoryWalletPdvSortedByOldDesc", null);
__decorate([
    (0, core_1.Get)('/newAs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HistoryWalletPdvController.prototype, "getHistoryWalletPdvSortedByNewAs", null);
__decorate([
    (0, core_1.Get)('/descNew'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HistoryWalletPdvController.prototype, "getHistoryWalletPdvSortedByNewDesc", null);
__decorate([
    (0, core_1.Get)('/debitAs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HistoryWalletPdvController.prototype, "getHistoryWalletPdvSortedByDebitAs", null);
__decorate([
    (0, core_1.Get)('/descDebit'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HistoryWalletPdvController.prototype, "getHistoryWalletPdvSortedByMontantDesc", null);
__decorate([
    (0, core_1.Get)('/PuvAs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HistoryWalletPdvController.prototype, "getHistoryWalletPdvSortedByPuvtAs", null);
__decorate([
    (0, core_1.Get)('/descPuv'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HistoryWalletPdvController.prototype, "getHistoryWalletPdvSortedByPuvDesc", null);
__decorate([
    (0, core_1.Get)('/:id'),
    __param(0, (0, core_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HistoryWalletPdvController.prototype, "getById", null);
__decorate([
    (0, core_1.Get)('/id_history/:id_history'),
    __param(0, (0, core_1.Param)('id_history')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HistoryWalletPdvController.prototype, "getByIdHistory", null);
__decorate([
    (0, core_1.Get)('/id_wallet/:id_wallet'),
    __param(0, (0, core_1.Param)('id_wallet')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HistoryWalletPdvController.prototype, "getByIdWallet", null);
__decorate([
    (0, core_1.Get)('/service/:service'),
    __param(0, (0, core_1.Param)('service')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HistoryWalletPdvController.prototype, "getByService", null);
exports.HistoryWalletPdvController = HistoryWalletPdvController = __decorate([
    (0, core_1.Mapping)('/historyWalletPdv'),
    __param(0, (0, core_1.Adapter)(history_wallet_pdv_service_1.HISTORY_WALLET_PDV_SERVICE)),
    __metadata("design:paramtypes", [Object])
], HistoryWalletPdvController);
//# sourceMappingURL=history-wallet-pdv-controller.js.map