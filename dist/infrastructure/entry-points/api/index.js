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
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
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
const activite_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/activite-pg");
const alimentation_commercial_pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-pdv-pg");
const alimentation_commercial_wallet_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-wallet-pg");
const alimentation_commercial_wallet_service_impl_1 = require("@/domain/use-cases/impl/alimentation-commercial-wallet-service-impl");
const alimentation_commercial_wallet_repository_1 = require("@/domain/entities/contracts/alimentation-commercial-wallet-repository");
const alimentation_commercial_wallet_controller_1 = require("./controllers/alimentation-commercial-wallet-controller");
const bill_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/bill-pg");
const bill_repository_1 = require("@/domain/entities/contracts/bill-repository");
const bill_service_impl_1 = require("@/domain/use-cases/impl/bill-service-impl");
const bill_controller_1 = require("./controllers/bill-controller");
const categories_service_impl_1 = require("@/domain/use-cases/impl/categories-service-impl");
const categories_repository_1 = require("@/domain/entities/contracts/categories-repository");
const categories_1 = require("./controllers/categories");
const categories_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/categories-pg");
const demande_alimentation_pdv_repository_1 = require("@/domain/entities/contracts/demande-alimentation-pdv-repository");
const demande_alimentation_pdv_service_impl_1 = require("@/domain/use-cases/impl/demande-alimentation-pdv-service-impl");
const demande_alimentation_pdv_controller_1 = require("./controllers/demande-alimentation-pdv-controller");
const demande_alimentation_pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/demande-alimentation-pdv-pg");
const history_wallet_pdv_controller_1 = require("./controllers/history-wallet-pdv-controller");
const history_wallet_pdv_repository_1 = require("@/domain/entities/contracts/history-wallet-pdv-repository");
const history_wallet_pdv_service_impl_1 = require("@/domain/use-cases/impl/history-wallet-pdv-service-impl");
const history_wallet_pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/history-wallet-pdv-pg");
const leads_repository_1 = require("@/domain/entities/contracts/leads-repository");
const leads_service_impl_1 = require("@/domain/use-cases/impl/leads-service_impl");
const leads_controller_1 = require("./controllers/leads-controller");
const leads_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/leads-pg");
const operateur_service_impl_1 = require("@/domain/use-cases/impl/operateur-service_impl");
const operateur_repository_1 = require("@/domain/entities/contracts/operateur-repository");
const operateur_controller_1 = require("./controllers/operateur-controller");
const operateur_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/operateur-pg");
const organisation_repository_1 = require("@/domain/entities/contracts/organisation-repository");
const organisation_service_impl_1 = require("@/domain/use-cases/impl/organisation-service-impl");
const organisation_controller_1 = require("./controllers/organisation-controller");
const organisation_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/organisation-pg");
const pdv_repository_1 = require("@/domain/entities/contracts/pdv-repository");
const pdv_service_impl_1 = require("@/domain/use-cases/impl/pdv-service-impl");
const pdv_controller_1 = require("./controllers/pdv-controller");
const pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-pg");
const wallet_repository_1 = require("@/domain/entities/contracts/wallet-repository");
const wallet_service_impl_1 = require("@/domain/use-cases/impl/wallet-service-impl");
const wallet_controller_1 = require("./controllers/wallet-controller");
const wallet_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pg");
const wallet_pdv_repository_1 = require("@/domain/entities/contracts/wallet-pdv-repository");
const wallet_pdv_service_impl_1 = require("@/domain/use-cases/impl/wallet-pdv-service-impl");
const wallet_pdv_controller_1 = require("./controllers/wallet-pdv-controller");
const wallet_pdv_pg_1 = require("@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pdv-pg");
const update_user_repository_1 = require("@/domain/entities/contracts/update-user-repository");
const update_user_service_impl_1 = require("@/domain/use-cases/impl/update-user-service-impl");
const update_user_controller_1 = require("./controllers/update-user-controller");
// Initialisation du serveur
const app = (0, express_1.default)();
exports.app = app;
// Configuration des CORS
app.use((0, cors_1.default)({
    origin: '*', // Remplace par l'URL de ton frontend Angular
    methods: '*',
    credentials: false,
    allowedHeaders: '*', // En-têtes autorisés
}));
const corsOptions = {
    origin: '*', // Your Angular app's URL
    methods: '*', // Allowed methods
    credentials: false,
    allowedHeaders: '*',
    optionsSuccessStatus: 200,
};
//app.use(express.json()); // Pour parser le corps des requêtes JSON
// Initialisation des services
const addUserService = new add_user_service_impl_1.AddUserServiceImpl();
const activiteRepository = new activite_repository_1.ActiviteRepositoryImpl(); // Initialise le repository
const activiteService = new activite_service_impl_1.GetActiviteServiceImpl(activiteRepository); // Initialise le service après le repository
const alimentationCommercialPdvRepository = new alimentation_commercial_pdv_1.AlimentationCommercialPdvRepositoryImpl(); // Ajout du repository pour alimentation
const alimentationCommercialPdvService = new alimentation_commercial_pdv_service_impl_1.AlimentationCommercialPdvServiceImpl(alimentationCommercialPdvRepository); // Service alimentation initialisé
const AlimentationCommercialWalletRepository = new alimentation_commercial_wallet_repository_1.AlimentationCommercialWalletRepositoryImpl();
const alimentationCommercialWalletService = new alimentation_commercial_wallet_service_impl_1.AlimentationCommercialWalletServiceImpl(AlimentationCommercialWalletRepository); // Service alimentation initialisé
const billRepository = new bill_repository_1.BillRepositoryImpl();
const billService = new bill_service_impl_1.BillServiceImpl(billRepository);
const categoriesRepository = new categories_repository_1.CategoriesRepositoryImpl();
const categoriesService = new categories_service_impl_1.CategoriesServiceImpl(categoriesRepository);
const demandeAlimentationPdvRepository = new demande_alimentation_pdv_repository_1.DemandeAlimentationPdvRepositoryImpl();
const demandeAlimentationPdvService = new demande_alimentation_pdv_service_impl_1.DemandeAlimentationPdvServiceImpl(demandeAlimentationPdvRepository);
const historyWalletPdvRepository = new history_wallet_pdv_repository_1.HistoryWalletPdvRepositoryImpl();
const historyWalletPdvService = new history_wallet_pdv_service_impl_1.HistoryWalletPdvServiceImpl(historyWalletPdvRepository);
const leadsRepository = new leads_repository_1.LeadsRepositoryImpl();
const leadsService = new leads_service_impl_1.LeadsServiceImpl(leadsRepository);
const operateurRepository = new operateur_repository_1.OperateurRepositoryImpl();
const operateurService = new operateur_service_impl_1.OperateurServiceImpl(operateurRepository);
const organisationRepository = new organisation_repository_1.OrganisationRepositoryImpl();
const organisationService = new organisation_service_impl_1.OrganisationServiceImpl(organisationRepository);
const pdvRepository = new pdv_repository_1.PdvRepositoryImpl();
const pdvService = new pdv_service_impl_1.PdvServiceImpl(pdvRepository);
const walletRepository = new wallet_repository_1.WalletRepositoryImpl();
const walletService = new wallet_service_impl_1.WalletServiceImpl(walletRepository);
const walletPdvRepository = new wallet_pdv_repository_1.WalletPdvRepositoryImpl();
const walletPdvService = new wallet_pdv_service_impl_1.WalletPdvServiceImpl(walletPdvRepository);
const updateUserRepository = new update_user_repository_1.UpdateUserRepositoryImpl();
const updateUserService = new update_user_service_impl_1.UpdateUserServiceImpl(updateUserRepository);
// Initialisation des contrôleurs
const addUserController = new add_user_controller_1.AddUserController(addUserService);
const activiteController = new activite_contoller_1.ActiviteController(activiteService); // Passe le service au contrôleur
const alimentationCommercialPdvController = new alimentation_commercial_pdv_controller_1.AlimentationCommercialPdvController(alimentationCommercialPdvService); // Contrôleur pour alimentation
const alimentationCommercialWalletController = new alimentation_commercial_wallet_controller_1.AlimentationCommercialWalletController(alimentationCommercialWalletService);
const billController = new bill_controller_1.BillController(billService);
const categoriesController = new categories_1.CategoriesController(categoriesService);
const demandeAlimentationPdvController = new demande_alimentation_pdv_controller_1.DemandeAlimentationPdvController(demandeAlimentationPdvService);
const historyWalletPdvController = new history_wallet_pdv_controller_1.HistoryWalletPdvController(historyWalletPdvService);
const leadsController = new leads_controller_1.LeadsController(leadsService);
const operateurController = new operateur_controller_1.OperateurController(operateurService);
const organisationController = new organisation_controller_1.OrganisationController(organisationService);
const pdvController = new pdv_controller_1.PdvController(pdvService);
const walletController = new wallet_controller_1.WalletController(walletService);
const walletPdvController = new wallet_pdv_controller_1.WalletPdvController(walletPdvService);
const updateUserController = new update_user_controller_1.UpdateUserController(updateUserService);
// Enregistrement des routes des contrôleurs
app.use('/add-user', addUserController.router);
app.use(activiteController.route, activiteController.router); // Ajout de la route du contrôleur activité
app.use(alimentationCommercialPdvController.route, alimentationCommercialPdvController.router); // Route pour alimentation
app.use(alimentationCommercialWalletController.route, alimentationCommercialPdvController.router);
app.use(billController.route, billController.router);
app.use(categoriesController.route, categoriesController.router);
app.use(demandeAlimentationPdvController.route, demandeAlimentationPdvController.router);
app.use(historyWalletPdvController.route, historyWalletPdvController.router);
app.use(leadsController.route, leadsController.router);
app.use(operateurController.route, operateurController.router);
app.use(organisationController.route, organisationController.router);
app.use(pdvController.route, pdvController.router);
app.use(walletController.route, walletController.router);
app.use(walletPdvController.route, walletPdvController.router);
app.use(updateUserController.route, walletController.router);
// Ajout d'une route GET sur `/`
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
// Route pour récupérer les utilisateurs
app.get('/get-users', (0, cors_1.default)(corsOptions)), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_pg_1.UserModelPg.findAll();
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer les activite
app.get('/activite', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activite = yield activite_pg_1.ActiviteModelPg.findAll();
        res.json(activite);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Route pour récupérer les alimentation commercial pdv 
app.get('/alimentaionCommercialPdv', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alimentaionCommercialPdv = yield alimentation_commercial_pdv_pg_1.AlimentationCommercialPdvModelPg.findAll();
        res.json(alimentaionCommercialPdv);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Route pour récupérer les alimentation commercial pdv 
app.get('/alimentaionCommercialWallet', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alimentaionCommercialWallet = yield alimentation_commercial_wallet_pg_1.AlimentationCommercialWalletModelPg.findAll();
        res.json(alimentaionCommercialWallet);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Route pour récupérer bill 
app.get('/bill', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bill = yield bill_pg_1.BillModelPg.findAll();
        res.json(bill);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Route pour récupérer categories
app.get('/categories', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield categories_pg_1.CategoriesModelPg.findAll();
        res.json(categories);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Route pour récupérer demandeAlimentaionPdv
app.get('/demandeAlimentaionPdv', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const demandeAlimentaionPdv = yield demande_alimentation_pdv_pg_1.DemandeAlimentationPdvModelPg.findAll();
        res.json(demandeAlimentaionPdv);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Route pour récupérer historyWalletPdv
app.get('/historyWalletPdv', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const historyWalletPdv = yield history_wallet_pdv_pg_1.HistoryWalletPdvModelPg.findAll();
        res.json(historyWalletPdv);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Route pour récupérer leads
app.get('/leads', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leads = yield leads_pg_1.leadsModelPg.findAll();
        res.json(leads);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Route pour récupérer operateur
app.get('/operateur', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const operateur = yield operateur_pg_1.OpeerateurModelPg.findAll();
        res.json(operateur);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Route pour récupérer organisation
app.get('/organisation', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organisation = yield organisation_pg_1.OrganisationModelPg.findAll();
        res.json(organisation);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Route pour récupérer pdv
app.get('/pdv', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pdv = yield pdv_pg_1.PdvModelPg.findAll();
        res.json(pdv);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Route pour récupérer wallet
app.get('/wallet', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wallet = yield wallet_pg_1.WalletModelPg.findAll();
        res.json(wallet);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Route pour récupérer wallet pdv
app.get('/walletPdv', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const walletPdv = yield wallet_pdv_pg_1.WalletPdvModelPg.findAll();
        res.json(walletPdv);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
}));
// Fonction utilitaire pour gérer les requêtes POST
app.post('/add-user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, role } = req.body; // Récupérer les champs nécessaires
        // Vérification des champs requis
        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: 'Les champs name, email, password et role sont requis.' });
        }
        const newUser = yield user_pg_1.UserModelPg.create({
            name,
            email,
            password, // Remplacez par hashedPassword si vous hachez le mot de passe
            role,
            created_at: new Date(), // Ajout de la date de création
            updated_at: new Date(), // Ajout de la date de mise à jour
        });
        res.status(201).json(newUser); // Répondre avec le statut 201 (Created)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'utilisateur' });
    }
}));
app.put('/update-user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id; // Récupérer l'id de l'utilisateur à partir des paramètres de l'URL
        const { name, email, password, role } = req.body; // Récupérer les champs du corps de la requête
        // Vérifiez que l'utilisateur existe
        const user = yield user_pg_1.UserModelPg.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }
        // Mettez à jour les informations de l'utilisateur
        yield user.update({ name, email, password, role });
        res.status(200).json(user); // Répondre avec l'utilisateur mis à jour
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur' });
    }
}));
// Middleware pour gérer les erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
// Démarrage du serveur
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map