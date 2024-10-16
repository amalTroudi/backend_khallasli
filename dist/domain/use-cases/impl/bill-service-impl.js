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
exports.BillServiceImpl = void 0;
const bill_repository_1 = require("@/domain/entities/contracts/bill-repository");
const core_1 = require("@tsclean/core");
let BillServiceImpl = class BillServiceImpl {
    constructor(billRepository) {
        this.billRepository = billRepository;
    }
    billService() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.billRepository.billRepository();
        });
    }
    //  méthode pour récupérer les données triées par montant ass
    getBillSortedByAmountAs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.billRepository.getBillSortedByAmountAS();
        });
    }
    getBillSortedByAmountDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Appel de la méthode pour récupérer les enregistrements triés en ordre décroissant
            return yield this.billRepository.getBillSortedByAmountDesc();
        });
    }
    getBillById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.billRepository.getBillById(id);
        });
    }
    getBillByIdBill(id_bill) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.billRepository.getBillByIdBill(id_bill);
        });
    }
    getBillByIdUser(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.billRepository.getBillByIdUser(id_user);
        });
    }
    getBillByOrganizationId(organisationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.billRepository.getBillByOrganizationId(organisationId);
        });
    }
};
exports.BillServiceImpl = BillServiceImpl;
exports.BillServiceImpl = BillServiceImpl = __decorate([
    (0, core_1.Service)(),
    __param(0, (0, core_1.Adapter)(bill_repository_1.BILL_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], BillServiceImpl);
//# sourceMappingURL=bill-service-impl.js.map