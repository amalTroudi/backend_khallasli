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
exports.ReportsController = void 0;
const reports_service_1 = require("@/domain/use-cases/reports-service");
const core_1 = require("@tsclean/core");
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
        this.route = '/reports';
    }
    initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/reports', this.reportsController.bind(this));
    }
    reportsController() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsService.reportsService();
        });
    }
    getReportsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsService.getReportById(id);
        });
    }
    getReportsnByIdReport(id_report) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsService.getReportByIdReport(id_report);
        });
    }
    getReportsByIdUser(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsService.getReporetByIdUser(id_user);
        });
    }
    getReportsByVille(ville) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsService.getReportsByVille(ville);
        });
    }
    getReportsByRegion(zone) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsService.getReportByZone(zone);
        });
    }
    getReportsByNomBanque(nom_banque) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsService.getReportByNomBanque(nom_banque);
        });
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, core_1.Get)("/all")
    // @Auth(["admin", "guest"])
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "reportsController", null);
__decorate([
    (0, core_1.Get)('id/:id'),
    __param(0, (0, core_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportsById", null);
__decorate([
    (0, core_1.Get)('id_pdv/:id_pdv'),
    __param(0, (0, core_1.Param)('id_report')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportsnByIdReport", null);
__decorate([
    (0, core_1.Get)('id_user/:id_user'),
    __param(0, (0, core_1.Param)('id_user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportsByIdUser", null);
__decorate([
    (0, core_1.Get)('/ville/:ville'),
    __param(0, (0, core_1.Param)('ville')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportsByVille", null);
__decorate([
    (0, core_1.Get)('/zone/:zone'),
    __param(0, (0, core_1.Param)('zone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportsByRegion", null);
__decorate([
    (0, core_1.Get)('/nom_banque/:nom_banque'),
    __param(0, (0, core_1.Param)('nom_banque')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportsByNomBanque", null);
exports.ReportsController = ReportsController = __decorate([
    (0, core_1.Mapping)('/reports'),
    __param(0, (0, core_1.Adapter)(reports_service_1.REPORTS_SERVICE)),
    __metadata("design:paramtypes", [Object])
], ReportsController);
//# sourceMappingURL=reports-contoller.js.map