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
exports.OperateurController = void 0;
const operateur_service_1 = require("@/domain/use-cases/operateur-service");
const core_1 = require("@tsclean/core");
let OperateurController = class OperateurController {
    constructor(operateurService) {
        this.operateurService = operateurService;
        this.route = '/operateur';
    }
    initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/operateur', this.operateurController.bind(this));
    }
    operateurController() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.operateurService.operateurService();
        });
    }
    getOperateurById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.operateurService.getOperateurById(id);
        });
    }
    getOperateurByIdOperateur(id_operateur) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.operateurService.getOperateurByIdOperateur(id_operateur);
        });
    }
    getOperateurByIdOperateurTopup(id_operateur_topup) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.operateurService.getOperateurByIdOperateurTopup(id_operateur_topup);
        });
    }
    getOperateurByLibelle(libelle) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.operateurService.getOperateurByLibelle(libelle);
        });
    }
};
exports.OperateurController = OperateurController;
__decorate([
    (0, core_1.Get)("/all")
    // @Auth(["admin", "guest"])
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OperateurController.prototype, "operateurController", null);
__decorate([
    (0, core_1.Get)('id/:id'),
    __param(0, (0, core_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OperateurController.prototype, "getOperateurById", null);
__decorate([
    (0, core_1.Get)('id_operateur/:id_operateur'),
    __param(0, (0, core_1.Param)('id_operateur')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperateurController.prototype, "getOperateurByIdOperateur", null);
__decorate([
    (0, core_1.Get)('topup/:id_operateur_topup'),
    __param(0, (0, core_1.Param)('id_operateur_topup')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperateurController.prototype, "getOperateurByIdOperateurTopup", null);
__decorate([
    (0, core_1.Get)('/libelle/:libelle'),
    __param(0, (0, core_1.Param)('libelle')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperateurController.prototype, "getOperateurByLibelle", null);
exports.OperateurController = OperateurController = __decorate([
    (0, core_1.Mapping)('/operateur'),
    __param(0, (0, core_1.Adapter)(operateur_service_1.OPERATEUR_SERVICE)),
    __metadata("design:paramtypes", [Object])
], OperateurController);
//# sourceMappingURL=operateur-controller.js.map