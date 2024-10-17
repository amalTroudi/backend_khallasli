import cors from 'cors';
import express from 'express';

// Importations des services et des contrôleurs
import { AddUserController } from './controllers/add-user-controller';
import { AddUserServiceImpl } from '@/domain/use-cases/impl/add-user-service-impl';
import { GetActiviteServiceImpl } from '@/domain/use-cases/impl/activite-service-impl';
import { UserModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg';
import { ActiviteRepositoryImpl } from '@/domain/entities/contracts/activite-repository';
import { ActiviteController } from './controllers/activite-contoller';
import { AlimentationCommercialPdvRepositoryImpl } from '@/domain/entities/contracts/alimentation-commercial-pdv';
import { AlimentationCommercialPdvServiceImpl } from '@/domain/use-cases/impl/alimentation-commercial-pdv-service-impl';
import { AlimentationCommercialPdvController } from './controllers/alimentation-commercial-pdv-controller';
import { ActiviteModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/activite-pg';
import { AlimentationCommercialPdvModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-pdv-pg';
import { AlimentationCommercialWalletModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/alimentation-commercial-wallet-pg';
import { AlimentationCommercialWalletServiceImpl } from '@/domain/use-cases/impl/alimentation-commercial-wallet-service-impl';
import { AlimentationCommercialWalletRepositoryImpl } from '@/domain/entities/contracts/alimentation-commercial-wallet-repository';
import { AlimentationCommercialWalletController } from './controllers/alimentation-commercial-wallet-controller';
import { BillModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/bill-pg';
import { BillRepositoryImpl } from '@/domain/entities/contracts/bill-repository';
import { BillServiceImpl } from '@/domain/use-cases/impl/bill-service-impl';
import { BillController } from './controllers/bill-controller';
import { CategoriesServiceImpl } from '@/domain/use-cases/impl/categories-service-impl';
import { CategoriesRepositoryImpl } from '@/domain/entities/contracts/categories-repository';
import { CategoriesController } from './controllers/categories';
import { CategoriesModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/categories-pg';
import { DemandeAlimentationPdvRepositoryImpl } from '@/domain/entities/contracts/demande-alimentation-pdv-repository';
import { DemandeAlimentationPdvServiceImpl } from '@/domain/use-cases/impl/demande-alimentation-pdv-service-impl';
import { DemandeAlimentationPdvController } from './controllers/demande-alimentation-pdv-controller';
import { DemandeAlimentationPdvModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/demande-alimentation-pdv-pg';
import { HistoryWalletPdvController } from './controllers/history-wallet-pdv-controller';
import { HistoryWalletPdvRepositoryImpl } from '@/domain/entities/contracts/history-wallet-pdv-repository';
import { HistoryWalletPdvServiceImpl } from '@/domain/use-cases/impl/history-wallet-pdv-service-impl';
import { HistoryWalletPdvModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/history-wallet-pdv-pg';
import { LeadsRepositoryImpl } from '@/domain/entities/contracts/leads-repository';
import { LeadsServiceImpl } from '@/domain/use-cases/impl/leads-service_impl';
import { LeadsController } from './controllers/leads-controller';
import { leadsModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/leads-pg';
import { OperateurServiceImpl } from '@/domain/use-cases/impl/operateur-service_impl';
import { OperateurRepositoryImpl } from '@/domain/entities/contracts/operateur-repository';
import { OperateurController } from './controllers/operateur-controller';
import { OpeerateurModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/operateur-pg';
import { OrganisationRepositoryImpl } from '@/domain/entities/contracts/organisation-repository';
import { OrganisationServiceImpl } from '@/domain/use-cases/impl/organisation-service-impl';
import { OrganisationController } from './controllers/organisation-controller';
import { OrganisationModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/organisation-pg';
import { PdvRepositoryImpl } from '@/domain/entities/contracts/pdv-repository';
import { PdvServiceImpl } from '@/domain/use-cases/impl/pdv-service-impl';
import { PdvController } from './controllers/pdv-controller';
import { PdvModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/pdv-pg';
import { WalletRepositoryImpl } from '@/domain/entities/contracts/wallet-repository';
import { WalletServiceImpl } from '@/domain/use-cases/impl/wallet-service-impl';
import { WalletController } from './controllers/wallet-controller';
import { WalletModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pg';
import { WalletPdvRepositoryImpl } from '@/domain/entities/contracts/wallet-pdv-repository';
import { WalletPdvServiceImpl } from '@/domain/use-cases/impl/wallet-pdv-service-impl';
import { WalletPdvController } from './controllers/wallet-pdv-controller';
import { WalletPdvModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/wallet-pdv-pg';
import { UpdateUserRepositoryImpl } from '@/domain/entities/contracts/update-user-repository';
import { UpdateUserServiceImpl } from '@/domain/use-cases/impl/update-user-service-impl';
import { UpdateUserController } from './controllers/update-user-controller';

// Initialisation du serveur
const app = express();

// Configuration des CORS
app.use(cors({
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
const addUserService = new AddUserServiceImpl();
const activiteRepository = new ActiviteRepositoryImpl(); // Initialise le repository
const activiteService = new GetActiviteServiceImpl(activiteRepository); // Initialise le service après le repository
const alimentationCommercialPdvRepository = new AlimentationCommercialPdvRepositoryImpl(); // Ajout du repository pour alimentation
const alimentationCommercialPdvService = new AlimentationCommercialPdvServiceImpl(alimentationCommercialPdvRepository); // Service alimentation initialisé
const AlimentationCommercialWalletRepository = new AlimentationCommercialWalletRepositoryImpl();
const alimentationCommercialWalletService = new AlimentationCommercialWalletServiceImpl(AlimentationCommercialWalletRepository); // Service alimentation initialisé
const billRepository = new BillRepositoryImpl();
const billService = new BillServiceImpl(billRepository);
const categoriesRepository = new CategoriesRepositoryImpl();
const categoriesService = new CategoriesServiceImpl(categoriesRepository);
const demandeAlimentationPdvRepository = new DemandeAlimentationPdvRepositoryImpl(); 
const demandeAlimentationPdvService = new DemandeAlimentationPdvServiceImpl(demandeAlimentationPdvRepository);
const historyWalletPdvRepository = new HistoryWalletPdvRepositoryImpl(); 
const historyWalletPdvService = new HistoryWalletPdvServiceImpl(historyWalletPdvRepository);
const leadsRepository = new LeadsRepositoryImpl(); 
const leadsService = new LeadsServiceImpl(leadsRepository);
const operateurRepository = new OperateurRepositoryImpl(); 
const operateurService = new OperateurServiceImpl(operateurRepository);
const organisationRepository = new OrganisationRepositoryImpl(); 
const organisationService = new OrganisationServiceImpl(organisationRepository);
const pdvRepository = new PdvRepositoryImpl(); 
const pdvService = new PdvServiceImpl(pdvRepository);
const walletRepository = new WalletRepositoryImpl();
const walletService = new WalletServiceImpl(walletRepository);
const walletPdvRepository = new WalletPdvRepositoryImpl(); 
const walletPdvService = new WalletPdvServiceImpl(walletPdvRepository);
const updateUserRepository = new UpdateUserRepositoryImpl();
const updateUserService = new UpdateUserServiceImpl(updateUserRepository);
// Initialisation des contrôleurs
const addUserController = new AddUserController(addUserService);
const activiteController = new ActiviteController(activiteService); // Passe le service au contrôleur
const alimentationCommercialPdvController = new AlimentationCommercialPdvController(alimentationCommercialPdvService); // Contrôleur pour alimentation
const alimentationCommercialWalletController = new AlimentationCommercialWalletController(alimentationCommercialWalletService) ;
const billController = new BillController(billService);
const categoriesController = new CategoriesController(categoriesService);
const demandeAlimentationPdvController = new DemandeAlimentationPdvController(demandeAlimentationPdvService);
const  historyWalletPdvController = new HistoryWalletPdvController(historyWalletPdvService);
const leadsController = new LeadsController(leadsService);
const operateurController = new OperateurController(operateurService);
const organisationController = new OrganisationController(organisationService);
const pdvController = new PdvController(pdvService);
const walletController = new WalletController(walletService);
const  walletPdvController = new WalletPdvController(walletPdvService);
const updateUserController = new UpdateUserController(updateUserService);
// Enregistrement des routes des contrôleurs
app.use('/add-user', addUserController.router);
app.use(activiteController.route, activiteController.router); // Ajout de la route du contrôleur activité
app.use(alimentationCommercialPdvController.route, alimentationCommercialPdvController.router); // Route pour alimentation
app.use(alimentationCommercialWalletController.route ,alimentationCommercialPdvController.router );
app.use(billController.route , billController.router);
app.use(categoriesController.route , categoriesController.router);
app.use(demandeAlimentationPdvController.route , demandeAlimentationPdvController.router);
app.use(historyWalletPdvController.route , historyWalletPdvController.router);
app.use(leadsController.route , leadsController.router) ;
app.use(operateurController.route , operateurController.router);
app.use(organisationController.route , organisationController.router);
app.use(pdvController.route  , pdvController.router);
app.use (walletController.route , walletController.router);
app.use(walletPdvController.route , walletPdvController.router);
app.use(updateUserController.route , walletController.router);
// Ajout d'une route GET sur `/`
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// Route pour récupérer les utilisateurs
app.get('/get-users' , cors(corsOptions)), async (req, res) => {
    try {
        const users = await UserModelPg.findAll();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
};
// Route pour récupérer les activite
app.get('/activite', async (req, res) => {
    try {
        const activite = await ActiviteModelPg.findAll();
        res.json(activite);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer les alimentation commercial pdv 
app.get('/alimentaionCommercialPdv', async (req, res) => {
    try {
        const alimentaionCommercialPdv = await AlimentationCommercialPdvModelPg.findAll();
        res.json(alimentaionCommercialPdv);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer les alimentation commercial pdv 
app.get('/alimentaionCommercialWallet', async (req, res) => {
    try {
        const alimentaionCommercialWallet = await AlimentationCommercialWalletModelPg.findAll();
        res.json(alimentaionCommercialWallet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer bill 
app.get('/bill', async (req, res) => {
    try {
        const bill = await BillModelPg.findAll();
        res.json(bill);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer categories
app.get('/categories', async (req, res) => {
    try {
        const categories = await CategoriesModelPg.findAll();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer demandeAlimentaionPdv
app.get('/demandeAlimentaionPdv', async (req, res) => {
    try {
        const demandeAlimentaionPdv = await DemandeAlimentationPdvModelPg.findAll();
        res.json(demandeAlimentaionPdv);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer historyWalletPdv
app.get('/historyWalletPdv', async (req, res) => {
    try {
        const historyWalletPdv = await HistoryWalletPdvModelPg.findAll();
        res.json(historyWalletPdv);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer leads
app.get('/leads', async (req, res) => {
    try {
        const leads = await leadsModelPg.findAll();
        res.json(leads);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer operateur
app.get('/operateur', async (req, res) => {
    try {
        const operateur = await OpeerateurModelPg.findAll();
        res.json(operateur);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer organisation
app.get('/organisation', async (req, res) => {
    try {
        const organisation = await OrganisationModelPg.findAll();
        res.json(organisation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer pdv
app.get('/pdv', async (req, res) => {
    try {
        const pdv = await PdvModelPg.findAll();
        res.json(pdv);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer wallet
app.get('/wallet', async (req, res) => {
    try {
        const wallet = await WalletModelPg.findAll();
        res.json(wallet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer wallet pdv
app.get('/walletPdv', async (req, res) => {
    try {
        const walletPdv = await WalletPdvModelPg.findAll();
        res.json(walletPdv);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Fonction utilitaire pour gérer les requêtes POST
app.post('/add-user', async (req, res) => {
    try {
        const { name, email, password, role } = req.body; // Récupérer les champs nécessaires

        // Vérification des champs requis
        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: 'Les champs name, email, password et role sont requis.' });
        }
         const newUser = await UserModelPg.create({
            name,
            email,
            password, // Remplacez par hashedPassword si vous hachez le mot de passe
            role,
            created_at: new Date(), // Ajout de la date de création
            updated_at: new Date(), // Ajout de la date de mise à jour
        });

        res.status(201).json(newUser); // Répondre avec le statut 201 (Created)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'utilisateur' });
    }
});
app.put('/update-user/:id', async (req, res) => {
    try {
        const userId = req.params.id; // Récupérer l'id de l'utilisateur à partir des paramètres de l'URL
        const { name, email, password, role } = req.body; // Récupérer les champs du corps de la requête

        // Vérifiez que l'utilisateur existe
        const user = await UserModelPg.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }

        // Mettez à jour les informations de l'utilisateur
        await user.update({ name, email, password, role });
        
        res.status(200).json(user); // Répondre avec l'utilisateur mis à jour
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur' });
    }
});

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

export { app };
