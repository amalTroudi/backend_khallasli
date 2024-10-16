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
exports.PdvController = void 0;
const pdv_service_1 = require("@/domain/use-cases/pdv-service");
const core_1 = require("@tsclean/core");
let PdvController = class PdvController {
    constructor(pdvService) {
        this.pdvService = pdvService;
        this.route = '/pdv';
    }
    initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.get('/pdv', this.pdvController.bind(this));
    }
    pdvController() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pdvService.pdvService();
        });
    }
    getPdvById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pdvService.getPdvById(id);
        });
    }
    getPdvnByIdPdv(id_pdv) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pdvService.getPdvByIdPdv(id_pdv);
        });
    }
    getPdvByIdCommercial(id_commercial) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pdvService.getPdvByIdCommercial(id_commercial);
        });
    }
    getPdvByIdCategorie(id_categorie) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pdvService.getPdvByIdCategorie(id_categorie);
        });
    }
    getPdvByVille(ville) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pdvService.getPdvByVille(ville);
        });
    }
    getPdvByRegion(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pdvService.getPdvByRegion(region);
        });
    }
    getPdvByCodeComptable(code_comptable) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pdvService.getPdvByCodeComptable(code_comptable);
        });
    }
    addUserController(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pdvService.addPdvService(data);
        });
    }
    deleteUserController(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error("ID is required");
            }
            yield this.pdvService.deletePdvService(id);
        });
    }
    updatePDVController(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ID reçu dans le contrôleur:', id); // Log pour vérifier l'ID
            return yield this.pdvService.updatePdvService(id, data);
        });
    }
};
exports.PdvController = PdvController;
__decorate([
    (0, core_1.Get)("/all")
    // @Auth(["admin", "guest"])
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PdvController.prototype, "pdvController", null);
__decorate([
    (0, core_1.Get)('id/:id'),
    __param(0, (0, core_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PdvController.prototype, "getPdvById", null);
__decorate([
    (0, core_1.Get)('id_pdv/:id_pdv'),
    __param(0, (0, core_1.Param)('id_pdv')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PdvController.prototype, "getPdvnByIdPdv", null);
__decorate([
    (0, core_1.Get)('id_commercial/:id_commercial'),
    __param(0, (0, core_1.Param)('id_commercial')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PdvController.prototype, "getPdvByIdCommercial", null);
__decorate([
    (0, core_1.Get)('id_categorie/:id_categorie'),
    __param(0, (0, core_1.Param)('id_categorie')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PdvController.prototype, "getPdvByIdCategorie", null);
__decorate([
    (0, core_1.Get)('/ville/:ville'),
    __param(0, (0, core_1.Param)('ville')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PdvController.prototype, "getPdvByVille", null);
__decorate([
    (0, core_1.Get)('/region/:region'),
    __param(0, (0, core_1.Param)('region')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PdvController.prototype, "getPdvByRegion", null);
__decorate([
    (0, core_1.Get)('/code_comptable/:code_comptable'),
    __param(0, (0, core_1.Param)('code_comptable')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PdvController.prototype, "getPdvByCodeComptable", null);
__decorate([
    (0, core_1.Post)(),
    __param(0, (0, core_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PdvController.prototype, "addUserController", null);
__decorate([
    (0, core_1.Delete)('delete/:id'),
    __param(0, (0, core_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PdvController.prototype, "deleteUserController", null);
__decorate([
    (0, core_1.Put)('/modifier/:id'),
    __param(0, (0, core_1.Param)('id')),
    __param(1, (0, core_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PdvController.prototype, "updatePDVController", null);
exports.PdvController = PdvController = __decorate([
    (0, core_1.Mapping)('/pdv'),
    __param(0, (0, core_1.Adapter)(pdv_service_1.PDV_SERVICE)),
    __metadata("design:paramtypes", [Object])
], PdvController);
//# sourceMappingURL=pdv-controller.js.map