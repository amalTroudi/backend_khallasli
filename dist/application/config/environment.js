"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG_PG = exports.MONGODB_URI = exports.CONFIG_MYSQL = exports.SESSION_SECRET = exports.PORT = exports.ENVIRONMENT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
/**
|----------------------------------------------------------------------------------------|
    App Configuration
|----------------------------------------------------------------------------------------|
*/
exports.ENVIRONMENT = process.env.NODE_ENV;
const PROD = exports.ENVIRONMENT === "production";
exports.PORT = process.env.PORT;
/**
|----------------------------------------------------------------------------------------|
    Authentication Configuration
|----------------------------------------------------------------------------------------|
*/
exports.SESSION_SECRET = process.env.JWT_SECRET || "";
/**
* Use only if you include jwt
*/
// if (!SESSION_SECRET) process.exit(1)
/**
|----------------------------------------------------------------------------------------|
    Databases Configuration
|----------------------------------------------------------------------------------------|
*/
/**
*  MySQL
*/
exports.CONFIG_MYSQL = {
    host: process.env.DB_HOST_MYSQL,
    user: process.env.DB_USER_MYSQL,
    password: process.env.DB_PASSWORD_MYSQL,
    database: process.env.DATABASE_MYSQL,
    port: process.env.DB_PORT_MYSQL
};
/**
*  Mongo DB
*/
exports.MONGODB_URI = PROD
    ? process.env.MONGO_PRODUCTION
    : process.env.MONGO_DEVELOPMENT;
/**
 * Postgres
 */
exports.CONFIG_PG = {
    host: process.env.DB_HOST_POSTGRES,
    user: process.env.DB_USER_POSTGRES,
    database: process.env.DATABASE_POSTGRES,
    password: process.env.DB_PASSWORD_POSTGRES,
    port: process.env.DB_PORT_POSTGRES,
};
//# sourceMappingURL=environment.js.map