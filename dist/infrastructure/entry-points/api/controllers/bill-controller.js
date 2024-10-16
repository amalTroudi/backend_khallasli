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
exports.BillController = void 0;
const bill_service_1 = require("@/domain/use-cases/bill-service");
const core_1 = require("@tsclean/core");
let BillController = class BillController {
    constructor(billService) {
        this.billService = billService;
        this.route = '/bill';
    }
    initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.post('/bill', this.billController.bind(this));
    }
    billController() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.billService.billService();
        });
    }
    getBillSortedByAmountAs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.billService.getBillSortedByAmountAs();
        });
    }
    getBillSortedByAmountDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Appel de la méthode pour obtenir les enregistrements triés par montant de façon décroissante
            return yield this.billService.getBillSortedByAmountDesc();
        });
    }
    getBillById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.billService.getBillById(id);
        });
    }
    getBillByIdBill(id_bill) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.billService.getBillByIdBill(id_bill);
        });
    }
    getBillByIdUser(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.billService.getBillByIdUser(id_user);
        });
    }
    getBillByOrganizationId(organisationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.billService.getBillByOrganizationId(organisationId);
        });
    }
};
exports.BillController = BillController;
__decorate([
    (0, core_1.Get)("/all")
    // @Auth(["admin", "guest"])
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BillController.prototype, "billController", null);
__decorate([
    (0, core_1.Get)('/sortedByAmountAs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BillController.prototype, "getBillSortedByAmountAs", null);
__decorate([
    (0, core_1.Get)('/desc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BillController.prototype, "getBillSortedByAmountDesc", null);
__decorate([
    (0, core_1.Get)('id/:id'),
    __param(0, (0, core_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BillController.prototype, "getBillById", null);
__decorate([
    (0, core_1.Get)('bill/:id_bill'),
    __param(0, (0, core_1.Param)('id_bill')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BillController.prototype, "getBillByIdBill", null);
__decorate([
    (0, core_1.Get)('user/:id_user'),
    __param(0, (0, core_1.Param)('id_user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BillController.prototype, "getBillByIdUser", null);
__decorate([
    (0, core_1.Get)('/organization/:organisationId'),
    __param(0, (0, core_1.Param)('organisationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BillController.prototype, "getBillByOrganizationId", null);
exports.BillController = BillController = __decorate([
    (0, core_1.Mapping)('/bill'),
    __param(0, (0, core_1.Adapter)(bill_service_1.BILL_SERVICE)),
    __metadata("design:paramtypes", [Object])
], BillController);
//# sourceMappingURL=bill-controller.js.map