"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = Auth;
const core_1 = require("@tsclean/core");
const jwt_adapter_1 = require("@/infrastructure/driven-adapters/adapters/jwt-adapter");
function Auth(role) {
    return (0, core_1.applyDecorators)((0, core_1.AccessResource)(new jwt_adapter_1.JwtAdapter(role)));
}
//# sourceMappingURL=auth.js.map