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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const authentification_service_1 = require("@/domain/use-cases/authentification-service");
const core_1 = require("@tsclean/core");
const validate_fields_1 = require("../../helpers/validate-fields");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // Library for JWT generation
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
let AuthenticationController = class AuthenticationController {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.route = '/api/v1/authentication';
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
        this.router.use((0, cors_1.default)({
            origin: 'http://localhost:4200',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }));
    }
    initializeRoutes() {
        this.router.post('/', this.authController.bind(this)); // Correction ici
    }
    authController(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { errors, isValid } = validate_fields_1.ValidateFields.fieldsValidation(data);
                if (!isValid) {
                    return { statusCode: 422, body: { "message": errors } };
                }
                const result = yield this.authenticationService.auth(data);
                if (!result || !result.name) {
                    return { statusCode: 401, body: { "message": "Invalid credentials" } };
                }
                const accessToken = jsonwebtoken_1.default.sign({ name: result.name }, // Payload
                'your_secret_key', // Secret key for signing the token
                { expiresIn: '1h' } // Token expiration
                );
                return {
                    statusCode: 200,
                    body: {
                        accessToken,
                        name: result.name
                    }
                };
            }
            catch (error) {
                console.error('Error during login:', error);
                return { statusCode: 500, body: { "message": "Internal server error" } };
            }
        });
    }
};
exports.AuthenticationController = AuthenticationController;
__decorate([
    (0, core_1.Post)(),
    __param(0, (0, core_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "authController", null);
exports.AuthenticationController = AuthenticationController = __decorate([
    (0, core_1.Mapping)('api/v1/authentication'),
    __param(0, (0, core_1.Inject)(authentification_service_1.AUTHENTICATION_SERVICE)),
    __metadata("design:paramtypes", [Object])
], AuthenticationController);
//# sourceMappingURL=authentification-controller.js.map