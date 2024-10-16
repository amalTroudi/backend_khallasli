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
exports.ReportsServiceImpl = void 0;
const core_1 = require("@tsclean/core");
const reports_service_1 = require("../reports-service");
let ReportsServiceImpl = class ReportsServiceImpl {
    constructor(reportsRepository) {
        this.reportsRepository = reportsRepository;
    }
    reportsService() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsRepository.getReports();
        });
    }
    getReportById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsRepository.getReportById(id);
        });
    }
    getReportByIdReport(id_report) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsRepository.getReportByIdReport(id_report);
        });
    }
    getReporetByIdUser(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsRepository.getReportByIdUser(id_user);
        });
    }
    getReportsByVille(ville) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsRepository.getReportByVille(ville);
        });
    }
    getReportByZone(zone) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsRepository.getReportByZone(zone);
        });
    }
    getReportByNomBanque(nom_banque) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.reportsRepository.getReportByNomBanque(nom_banque);
        });
    }
};
exports.ReportsServiceImpl = ReportsServiceImpl;
exports.ReportsServiceImpl = ReportsServiceImpl = __decorate([
    (0, core_1.Service)(),
    __param(0, (0, core_1.Adapter)(reports_service_1.REPORTS_SERVICE)),
    __metadata("design:paramtypes", [Object])
], ReportsServiceImpl);
//# sourceMappingURL=reports-service-impl.js.map