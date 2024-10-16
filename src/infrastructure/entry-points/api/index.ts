import express from 'express';
import cors from 'cors';
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

// Initialisation du serveur
const app = express();
app.use(cors({
    origin: 'http://localhost:4200', // Remplace par l'URL de ton frontend Angular
    methods: ['GET', 'POST' ,'PUT','DELETE'], // Méthodes autorisées
    allowedHeaders: ['Content-Type', 'Authorization'] // En-têtes autorisés
}));
app.use(express.json()); // Pour parser le corps des requêtes JSON

// Initialisation des services
const addUserService = new AddUserServiceImpl();
const activiteRepository = new ActiviteRepositoryImpl(); // Initialise le repository
const activiteService = new GetActiviteServiceImpl(activiteRepository); // Initialise le service après le repository
const alimentationCommercialPdvRepository = new AlimentationCommercialPdvRepositoryImpl(); // Ajout du repository pour alimentation
const alimentationCommercialPdvService = new AlimentationCommercialPdvServiceImpl(alimentationCommercialPdvRepository); // Service alimentation initialisé


// Initialisation des contrôleurs
const addUserController = new AddUserController(addUserService);
const activiteController = new ActiviteController(activiteService); // Passe le service au contrôleur
const alimentationCommercialPdvController = new AlimentationCommercialPdvController(alimentationCommercialPdvService); // Contrôleur pour alimentation
// Enregistrement des routes des contrôleurs
app.use(addUserController.route, addUserController.router);
app.use(activiteController.route, activiteController.router); // Ajout de la route du contrôleur activité
app.use(alimentationCommercialPdvController.route, alimentationCommercialPdvController.router); // Route pour alimentation

// Ajout d'une route GET sur `/`
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Route pour récupérer les utilisateurs
app.get('/api/users', async (req, res) => {
    try {
        const users = await UserModelPg.findAll();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});

// Démarrage du serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export { app };
