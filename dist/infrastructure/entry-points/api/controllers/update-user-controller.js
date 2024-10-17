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
exports.UpdateUserController = void 0;
const update_user_service_1 = require("@/domain/use-cases/update-user-service");
const core_1 = require("@tsclean/core");
let UpdateUserController = class UpdateUserController {
    constructor(updateUserService) {
        this.updateUserService = updateUserService;
        this.route = '/update-user/:id';
    }
    initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.Put('/update-user/:id', this.updateUserController.bind(this));
    }
    //  mise à jour dans le contrôleur
    updateUserController(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ID reçu dans le contrôleur:', id); // Log pour vérifier l'ID
            return yield this.updateUserService.updateUserService(id, data);
        });
    }
};
exports.UpdateUserController = UpdateUserController;
__decorate([
    (0, core_1.Put)(':id'),
    __param(0, (0, core_1.Param)('id')),
    __param(1, (0, core_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UpdateUserController.prototype, "updateUserController", null);
exports.UpdateUserController = UpdateUserController = __decorate([
    (0, core_1.Mapping)('api/v1/update-user'),
    __param(0, (0, core_1.Adapter)(update_user_service_1.UPDATE_USER_SERVICE)),
    __metadata("design:paramtypes", [Object])
], UpdateUserController);
//# sourceMappingURL=update-user-controller.js.map