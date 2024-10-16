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
exports.AlimentationCommercialWalletModelPg = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let AlimentationCommercialWalletModelPg = class AlimentationCommercialWalletModelPg extends sequelize_typescript_1.Model {
};
exports.AlimentationCommercialWalletModelPg = AlimentationCommercialWalletModelPg;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], AlimentationCommercialWalletModelPg.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AlimentationCommercialWalletModelPg.prototype, "id_alimentation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], AlimentationCommercialWalletModelPg.prototype, "montant", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AlimentationCommercialWalletModelPg.prototype, "id_commercial", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], AlimentationCommercialWalletModelPg.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], AlimentationCommercialWalletModelPg.prototype, "dt", void 0);
exports.AlimentationCommercialWalletModelPg = AlimentationCommercialWalletModelPg = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'alimentation_commercial_wallet',
        timestamps: false
    })
], AlimentationCommercialWalletModelPg);
//# sourceMappingURL=alimentation-commercial-wallet-pg.js.map