"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const activite_contoller_1 = require("./activite-contoller");
const add_user_controller_1 = require("./add-user-controller");
const alimentation_commercial_pdv_controller_1 = require("./alimentation-commercial-pdv-controller");
const alimentation_commercial_wallet_controller_1 = require("./alimentation-commercial-wallet-controller");
const authentification_controller_1 = require("./authentification-controller");
const bill_controller_1 = require("./bill-controller");
const categories_1 = require("./categories");
const delete_user_controller_1 = require("./delete-user-controller");
const demande_alimentation_pdv_controller_1 = require("./demande-alimentation-pdv-controller");
const get_users_controller_1 = require("./get-users-controller");
const history_wallet_pdv_controller_1 = require("./history-wallet-pdv-controller");
const leads_controller_1 = require("./leads-controller");
const operateur_controller_1 = require("./operateur-controller");
const organisation_controller_1 = require("./organisation-controller");
const pdv_controller_1 = require("./pdv-controller");
const update_user_controller_1 = require("./update-user-controller");
const wallet_controller_1 = require("./wallet-controller");
const wallet_pdv_controller_1 = require("./wallet-pdv-controller");
exports.controllers = [
    add_user_controller_1.AddUserController,
    get_users_controller_1.GetUsersController,
    authentification_controller_1.AuthenticationController,
    delete_user_controller_1.DeleteUserController,
    activite_contoller_1.ActiviteController,
    alimentation_commercial_pdv_controller_1.AlimentationCommercialPdvController,
    alimentation_commercial_wallet_controller_1.AlimentationCommercialWalletController,
    bill_controller_1.BillController,
    categories_1.CategoriesController,
    demande_alimentation_pdv_controller_1.DemandeAlimentationPdvController,
    history_wallet_pdv_controller_1.HistoryWalletPdvController,
    leads_controller_1.LeadsController,
    operateur_controller_1.OperateurController,
    organisation_controller_1.OrganisationController,
    pdv_controller_1.PdvController,
    update_user_controller_1.UpdateUserController,
    wallet_controller_1.WalletController,
    wallet_pdv_controller_1.WalletPdvController
    // ReportsController
];
//# sourceMappingURL=index.js.map