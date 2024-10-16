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
exports.AuthenticationServiceImpl = void 0;
const check_email_repository_1 = require("@/domain/entities/contracts/check-email-repository");
const encrypt_repository_1 = require("@/domain/entities/contracts/encrypt-repository");
const hash_compare_repository_1 = require("@/domain/entities/contracts/hash-compare-repository");
const update_access_token_repository_1 = require("@/domain/entities/contracts/update-access-token-repository");
const core_1 = require("@tsclean/core");
let AuthenticationServiceImpl = class AuthenticationServiceImpl {
    constructor(encrypt, hashCompare, checkEmailRepository, updateAccessTokenRepository) {
        this.encrypt = encrypt;
        this.hashCompare = hashCompare;
        this.checkEmailRepository = checkEmailRepository;
        this.updateAccessTokenRepository = updateAccessTokenRepository;
    }
    auth(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user exists
                const account = yield this.checkEmailRepository.checkEmail(data.email);
                console.log("Account found:", account);
                // If user not found, return null
                if (!account) {
                    console.log("No account found for email:", data.email);
                    return null;
                }
                // Compare the provided password with the stored password
                const isValid = data.password.trim() === account.password.trim(); // Simple comparison
                console.log("Provided password:", data.password);
                console.log("Stored password:", account.password);
                console.log("Password comparison result:", isValid);
                if (!isValid) {
                    console.log("Invalid password for email:", data.email);
                    return null;
                }
                // If all is correct, return the result object
                return {
                    accessToken: "your_generated_access_token_here", // Generate token here
                    name: account.name,
                    role: account.role
                };
            }
            catch (error) {
                console.error("Error during authentication:", error);
                throw new Error("Authentication failed.");
            }
        });
    }
};
exports.AuthenticationServiceImpl = AuthenticationServiceImpl;
exports.AuthenticationServiceImpl = AuthenticationServiceImpl = __decorate([
    (0, core_1.Service)(),
    __param(0, (0, core_1.Adapter)(encrypt_repository_1.ENCRYPT_REPOSITORY)),
    __param(1, (0, core_1.Adapter)(hash_compare_repository_1.HASH_COMPARE_REPOSITORY)),
    __param(2, (0, core_1.Adapter)(check_email_repository_1.CHECK_EMAIL_REPOSITORY)),
    __param(3, (0, core_1.Adapter)(update_access_token_repository_1.UPDATE_ACCESS_TOKEN_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], AuthenticationServiceImpl);
//# sourceMappingURL=authentification-service-impl.js.map