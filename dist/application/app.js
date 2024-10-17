"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContainer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const core_1 = require("@tsclean/core");
const controllers_1 = require("@/infrastructure/entry-points/api/controllers");
const providers_1 = require("@/infrastructure/driven-adapters/providers");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
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
app.options('*', (0, cors_1.default)()); // Permettre toutes les options
app.use((0, cors_1.default)({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
    credentials: false
}));
// Use CORS middleware
app.use((0, cors_1.default)(corsOptions));
// Middleware to parse JSON request bodies
app.use(express_1.default.json());
// Start the server
const PORT = 4000; //process.env.PORT || 4000; // Use the PORT from environment variables or default to 4100
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Dependency injection container for services and controllers
let AppContainer = class AppContainer {
};
exports.AppContainer = AppContainer;
exports.AppContainer = AppContainer = __decorate([
    (0, core_1.Container)({
        providers: [...providers_1.services, ...providers_1.adapters],
        controllers: [...controllers_1.controllers],
    })
], AppContainer);
//# sourceMappingURL=app.js.map