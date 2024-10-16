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
exports.LeadsController = void 0;
const leads_service_1 = require("@/domain/use-cases/leads-service");
const core_1 = require("@tsclean/core");
let LeadsController = class LeadsController {
    constructor(leadService) {
        this.leadService = leadService;
        this.route = '/leads';
    }
    initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/leads', this.leadsController.bind(this));
    }
    leadsController() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.leadService.leadsService();
        });
    }
    getLeadsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.leadService.getLeadsById(id);
        });
    }
    getLeadsByIdLead(id_lead) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.leadService.getLeadsByIdLead(id_lead);
        });
    }
    getLeadsByIdUser(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.leadService.getLeadsByIdUser(id_user);
        });
    }
    getLeadsByIdReport(id_report) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.leadService.getLeadsByIdReport(id_report);
        });
    }
};
exports.LeadsController = LeadsController;
__decorate([
    (0, core_1.Get)("/all")
    // @Auth(["admin", "guest"])
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "leadsController", null);
__decorate([
    (0, core_1.Get)('id/:id'),
    __param(0, (0, core_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getLeadsById", null);
__decorate([
    (0, core_1.Get)('lead/:id_lead'),
    __param(0, (0, core_1.Param)('id_lead')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getLeadsByIdLead", null);
__decorate([
    (0, core_1.Get)('user/:id_user'),
    __param(0, (0, core_1.Param)('id_user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getLeadsByIdUser", null);
__decorate([
    (0, core_1.Get)('/report/:id_report'),
    __param(0, (0, core_1.Param)('id_report')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getLeadsByIdReport", null);
exports.LeadsController = LeadsController = __decorate([
    (0, core_1.Mapping)('/leads'),
    __param(0, (0, core_1.Adapter)(leads_service_1.LEADS_SERVICE)),
    __metadata("design:paramtypes", [Object])
], LeadsController);
//# sourceMappingURL=leads-controller.js.map