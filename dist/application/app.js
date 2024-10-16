"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContainer = void 0;
const core_1 = require("@tsclean/core");
const controllers_1 = require("@/infrastructure/entry-points/api/controllers");
const providers_1 = require("@/infrastructure/driven-adapters/providers");
let AppContainer = class AppContainer {
};
exports.AppContainer = AppContainer;
exports.AppContainer = AppContainer = __decorate([
    (0, core_1.Container)({
        providers: [...providers_1.services, ...providers_1.adapters],
        controllers: [...controllers_1.controllers]
    })
], AppContainer);
//# sourceMappingURL=app.js.map