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
Object.defineProperty(exports, "__esModule", { value: true });
exports.singletonInitializers = void 0;
const pg_instance_1 = require("@/application/config/pg-instance");
/**
   * This array has all the singleton instances of the application
   */
exports.singletonInitializers = [
    () => __awaiter(void 0, void 0, void 0, function* () {
        const pgConfig = pg_instance_1.PgConfiguration.getInstance();
        yield pgConfig.managerConnectionPg();
    }),
];
//# sourceMappingURL=singleton.js.map