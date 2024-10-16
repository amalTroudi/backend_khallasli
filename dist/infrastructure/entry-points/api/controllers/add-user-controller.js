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
exports.AddUserController = void 0;
const core_1 = require("@tsclean/core"); // Importer les décorateurs nécessaires
const add_user_service_1 = require("@/domain/use-cases/add-user-service");
let AddUserController = class AddUserController {
    constructor(addUserService) {
        this.addUserService = addUserService;
        this.route = '/api/v1/add-user';
    }
    initializeRoutes() {
        // Route pour ajouter un utilisateur
        this.router.post('/add-user', this.addUser.bind(this));
    }
    addUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.addUserService.addUserService(data);
                return user; // Retourner l'utilisateur créé
            }
            catch (error) {
                throw new Error("Erreur lors de l'ajout de l'utilisateur : " + error); // Gérer l'erreur
            }
        });
    }
};
exports.AddUserController = AddUserController;
__decorate([
    (0, core_1.Post)() // Indiquer que cette méthode gère les requêtes POST
    ,
    __param(0, (0, core_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddUserController.prototype, "addUser", null);
exports.AddUserController = AddUserController = __decorate([
    (0, core_1.Mapping)('api/v1/add-user') // Ajouter le décorateur de mapping
    // Indiquer que c'est un contrôleur
    ,
    __param(0, (0, core_1.Inject)(add_user_service_1.ADD_USER_SERVICE)),
    __metadata("design:paramtypes", [Object])
], AddUserController);
//# sourceMappingURL=add-user-controller.js.map