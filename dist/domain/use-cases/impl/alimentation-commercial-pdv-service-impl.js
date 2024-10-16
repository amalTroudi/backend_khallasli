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
exports.AlimentationCommercialPdvServiceImpl = void 0;
const alimentation_commercial_pdv_1 = require("@/domain/entities/contracts/alimentation-commercial-pdv");
const core_1 = require("@tsclean/core");
let AlimentationCommercialPdvServiceImpl = class AlimentationCommercialPdvServiceImpl {
    constructor(alimentationCommercialPdvRepository) {
        this.alimentationCommercialPdvRepository = alimentationCommercialPdvRepository;
    }
    alimentationCommercialPdvService() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alimentationCommercialPdvRepository.alimentationCommercialPdvRepository();
        });
    }
    //  méthode pour récupérer les données triées par montant ass
    getAlimentationCommercialPdvSortedByMontantAs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alimentationCommercialPdvRepository.getAlimentationCommercialPdvSortedByMontantAS();
        });
    }
    getAlimentationCommercialPdvSortedByMontantDesc() {
        return __awaiter(this, void 0, void 0, function* () {
            // Appel de la méthode pour récupérer les enregistrements triés en ordre décroissant
            return yield this.alimentationCommercialPdvRepository.getAlimentationCommercialPdvSortedByMontantDesc();
        });
    }
    // Nouvelle méthode pour récupérer les enregistrements avec un status donné
    getAlimentationCommercialPdvByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alimentationCommercialPdvRepository.getAlimentationCommercialPdvByStatus(status);
        });
    }
    countAlimentationCommercialPdvByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alimentationCommercialPdvRepository.countAlimentationCommercialPdvByStatus(status);
        });
    }
    getAlimentationCommercialPdvById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alimentationCommercialPdvRepository.getAlimentationCommercialPdvById(id);
        });
    }
};
exports.AlimentationCommercialPdvServiceImpl = AlimentationCommercialPdvServiceImpl;
exports.AlimentationCommercialPdvServiceImpl = AlimentationCommercialPdvServiceImpl = __decorate([
    (0, core_1.Service)(),
    __param(0, (0, core_1.Adapter)(alimentation_commercial_pdv_1.ALIMENTATION_COMMERCIAL_PDV_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], AlimentationCommercialPdvServiceImpl);
//# sourceMappingURL=alimentation-commercial-pdv-service-impl.js.map