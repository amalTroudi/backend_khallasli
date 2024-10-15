import express from 'express';
import cors from 'cors';
import { AddUserController } from './controllers/add-user-controller';
import { AddUserServiceImpl } from '@/domain/use-cases/impl/add-user-service-impl';

const app = express();
app.use(cors());
app.use(express.json()); // Pour parser le corps des requêtes JSON

const addUserService = new AddUserServiceImpl();

// Instancier le contrôleur
const addUserController = new AddUserController(addUserService);

// Utiliser la route du contrôleur
app.use(addUserController.route, addUserController.router);

// Ajout de la route GET sur `/`
app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export { app };