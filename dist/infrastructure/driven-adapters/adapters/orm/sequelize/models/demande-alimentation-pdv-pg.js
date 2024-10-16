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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandeAlimentationPdvModelPg = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let DemandeAlimentationPdvModelPg = class DemandeAlimentationPdvModelPg extends sequelize_typescript_1.Model {
};
exports.DemandeAlimentationPdvModelPg = DemandeAlimentationPdvModelPg;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], DemandeAlimentationPdvModelPg.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], DemandeAlimentationPdvModelPg.prototype, "id_alimentation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], DemandeAlimentationPdvModelPg.prototype, "ref", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], DemandeAlimentationPdvModelPg.prototype, "bordereau_number", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], DemandeAlimentationPdvModelPg.prototype, "approve_par", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], DemandeAlimentationPdvModelPg.prototype, "montant", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], DemandeAlimentationPdvModelPg.prototype, "bank", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], DemandeAlimentationPdvModelPg.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], DemandeAlimentationPdvModelPg.prototype, "id_wallet", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], DemandeAlimentationPdvModelPg.prototype, "dt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], DemandeAlimentationPdvModelPg.prototype, "update_at", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], DemandeAlimentationPdvModelPg.prototype, "riembursed", void 0);
exports.DemandeAlimentationPdvModelPg = DemandeAlimentationPdvModelPg = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'demande_alimentation_pdv',
        timestamps: false
    })
], DemandeAlimentationPdvModelPg);
//# sourceMappingURL=demande-alimentation-pdv-pg.js.map