import express from 'express';
import cors from 'cors';
import { Container } from '@tsclean/core';
import { controllers } from '@/infrastructure/entry-points/api/controllers';
import { services, adapters } from '@/infrastructure/driven-adapters/providers';
import dotenv from 'dotenv';
import http from 'http';
dotenv.config();
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Autorise uniquement les requêtes depuis votre frontend
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
// Middleware spécifique pour gérer les requêtes OPTIONS (pré-flight)
app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.sendStatus(200); // Répond avec succès à la requête OPTIONS
});
// const server = http.createServer((req, res) => {
//     // Set CORS headers
//     res.setHeader('Access-Control-Allow-Origin', '*'); // Allow any origin
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//     // Handle preflight requests
//     if (req.method === 'GET') {
//         res.writeHead(204); // No content
//         return res.end();
//     }

//     // Your request handling logic
//     if (req.url === '/dashboards/project' && req.method === 'GET') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ message: 'Hello from the server!' }));
//     } else {
//         res.writeHead(404);
//         res.end();
//     }

// })

// CORS configuration options
const corsOptions = {
    origin: '*', // Your Angular app's URL
    methods: '*', // Allowed methods
    credentials: false,
    allowedHeaders: '*',
    optionsSuccessStatus: 200,
};
app.options('*', cors()); // Permettre toutes les options


app.use(cors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
    credentials: false
}));

// Use CORS middleware
app.use(cors(corsOptions));

// Middleware to parse JSON request bodies
app.use(express.json());

// Start the server
const PORT = 4000 ; //process.env.PORT || 4000; // Use the PORT from environment variables or default to 4100
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Dependency injection container for services and controllers
@Container({
    providers: [...services, ...adapters],
    controllers: [...controllers],
})
export class AppContainer {}
