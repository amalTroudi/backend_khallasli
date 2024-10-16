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
exports.AlimentationCommercialPdvModelPg = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let AlimentationCommercialPdvModelPg = class AlimentationCommercialPdvModelPg extends sequelize_typescript_1.Model {
};
exports.AlimentationCommercialPdvModelPg = AlimentationCommercialPdvModelPg;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], AlimentationCommercialPdvModelPg.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AlimentationCommercialPdvModelPg.prototype, "id_alimentation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], AlimentationCommercialPdvModelPg.prototype, "montant", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AlimentationCommercialPdvModelPg.prototype, "id_commercial", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AlimentationCommercialPdvModelPg.prototype, "id_pdv", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], AlimentationCommercialPdvModelPg.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AlimentationCommercialPdvModelPg.prototype, "approuve_par", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AlimentationCommercialPdvModelPg.prototype, "rejete_par", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], AlimentationCommercialPdvModelPg.prototype, "dt", void 0);
exports.AlimentationCommercialPdvModelPg = AlimentationCommercialPdvModelPg = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'alimentation_commercial_pdv',
        timestamps: false
    })
], AlimentationCommercialPdvModelPg);
//# sourceMappingURL=alimentation-commercial-pdv-pg.js.map