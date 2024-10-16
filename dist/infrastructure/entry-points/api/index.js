"use strict";
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
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Importations des services et des contrôleurs
const add_user_controller_1 = require("./controllers/add-user-controller");
const add_user_service_impl_1 = require("@/domain/use-cases/impl/add-user-service-impl");
const activite_service_impl_1 = require("@/domain/use-cases/impl/activite-service-impl");
const user_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg");
const activite_repository_1 = require("@/domain/entities/contracts/activite-repository");
const activite_contoller_1 = require("./controllers/activite-contoller");
const alimentation_commercial_pdv_1 = require("@/domain/entities/contracts/alimentation-commercial-pdv");
const alimentation_commercial_pdv_service_impl_1 = require("@/domain/use-cases/impl/alimentation-commercial-pdv-service-impl");
const alimentation_commercial_pdv_controller_1 = require("./controllers/alimentation-commercial-pdv-controller");
// Initialisation du serveur
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)({
    origin: 'http://localhost:4200', // Remplace par l'URL de ton frontend Angular
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes autorisées
    allowedHeaders: ['Content-Type', 'Authorization'] // En-têtes autorisés
}));
app.use(express_1.default.json()); // Pour parser le corps des requêtes JSON
// Initialisation des services
const addUserService = new add_user_service_impl_1.AddUserServiceImpl();
const activiteRepository = new activite_repository_1.ActiviteRepositoryImpl(); // Initialise le repository
const activiteService = new activite_service_impl_1.GetActiviteServiceImpl(activiteRepository); // Initialise le service après le repository
const alimentationCommercialPdvRepository = new alimentation_commercial_pdv_1.AlimentationCommercialPdvRepositoryImpl(); // Ajout du repository pour alimentation
const alimentationCommercialPdvService = new alimentation_commercial_pdv_service_impl_1.AlimentationCommercialPdvServiceImpl(alimentationCommercialPdvRepository); // Service alimentation initialisé
// Initialisation des contrôleurs
const addUserController = new add_user_controller_1.AddUserController(addUserService);
const activiteController = new activite_contoller_1.ActiviteController(activiteService); // Passe le service au contrôleur
const alimentationCommercialPdvController = new alimentation_commercial_pdv_controller_1.AlimentationCommercialPdvController(alimentationCommercialPdvService); // Contrôleur pour alimentation
// Enregistrement des routes des contrôleurs
app.use(addUserController.route, addUserController.router);
app.use(activiteController.route, activiteController.router); // Ajout de la route du contrôleur activité
app.use(alimentationCommercialPdvController.route, alimentationCommercialPdvController.router); // Route pour alimentation
// Ajout d'une route GET sur `/`
app.get('/', (req, res) => {
    res.send('Hello World');
});
// Route pour récupérer les utilisateurs
app.get('/api/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_pg_1.UserModelPg.findAll();
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Démarrage du serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map