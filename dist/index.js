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
require("module-alias/register");
const helmet_1 = __importDefault(require("helmet"));
const core_1 = require("@tsclean/core");
const app_1 = require("@/application/app");
const environment_1 = require("@/application/config/environment");
const singleton_1 = require("@/application/singleton");
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        /** Iterate the singleton functions */
        for (const initFn of singleton_1.singletonInitializers) {
            yield initFn();
        }
        console.log('error');
        try {
            const app = yield core_1.StartProjectInit.create(app_1.AppContainer);
            console.log('error');
            app.use((0, helmet_1.default)());
            console.log('error');
            yield app.listen(environment_1.PORT, () => console.log(`Running on port: ${environment_1.PORT}`));
        }
        catch (error) {
            console.log(error);
        }
    });
}
void init().catch((e) => console.log(e));
//# sourceMappingURL=index.js.map