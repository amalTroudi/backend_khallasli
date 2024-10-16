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
exports.LoadAccountTokenServiceImpl = void 0;
const decrypt_repository_1 = require("@/domain/entities/contracts/decrypt-repository");
const load_account_token_repository_1 = require("@/domain/entities/contracts/load-account-token-repository");
const core_1 = require("@tsclean/core");
let LoadAccountTokenServiceImpl = class LoadAccountTokenServiceImpl {
    constructor(decrypt, loadAccountTokenRepository) {
        this.decrypt = decrypt;
        this.loadAccountTokenRepository = loadAccountTokenRepository;
    }
    loadToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let accessToken;
            try {
                accessToken = yield this.decrypt.decrypt(token);
            }
            catch (e) {
                return null;
            }
            if (accessToken) {
                const account = yield this.loadAccountTokenRepository.loadToken(accessToken["account"]);
                console.log("service", account);
                if (account)
                    return account;
            }
            return null;
        });
    }
};
exports.LoadAccountTokenServiceImpl = LoadAccountTokenServiceImpl;
exports.LoadAccountTokenServiceImpl = LoadAccountTokenServiceImpl = __decorate([
    (0, core_1.Service)(),
    __param(0, (0, core_1.Adapter)(decrypt_repository_1.DECRYPT_REPOSITORY)),
    __param(1, (0, core_1.Adapter)(load_account_token_repository_1.LOAD_ACCOUNT_TOKEN_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object])
], LoadAccountTokenServiceImpl);
//# sourceMappingURL=load-account-service-impl.js.map