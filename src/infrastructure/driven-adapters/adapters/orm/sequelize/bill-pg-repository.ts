import { IBillRepository } from "@/domain/entities/contracts/bill-repository";
import { AlimentationCommercialPdvModelPg } from "./models/alimentation-commercial-pdv-pg";
import { BillModelPg } from "./models/bill-pg";

export class BillPgRepositoryAdapter implements IBillRepository {
    
  
    async  billRepository(): Promise<BillModelPg[]> {
        return await BillModelPg.findAll({
            attributes: { exclude: ['password'] } // Exclure le champ password
        });
    }
     //  méthode pour récupérer les données triées par amount ass
     async getBillSortedByAmountAS(): Promise<BillModelPg[]> {
        return await BillModelPg.findAll({
            order: [['amount', 'ASC']], // Tri par montant en ordre ascendant
        });
    }
    async getBillSortedByAmountDesc(): Promise<BillModelPg[]> {
        // Récupérer les enregistrements triés par amount en ordre décroissant
        return await BillModelPg.findAll({
            order: [['amount', 'DESC']]
        });
    }
    async getBillById(id: number): Promise<BillModelPg | null> {
        return await BillModelPg.findOne({
            where: { id }
        });
    }
    async getBillByIdBill(id_bill: string): Promise<BillModelPg | null> {
        return await BillModelPg.findOne({
            where: { id_bill }
        });
    }
    async getBillByIdUser(id_user: string): Promise<BillModelPg | null> {
        return await BillModelPg.findOne({
            where: { id_user }
        });
    }
     //  Filtrer par organizationId
     async getBillByOrganizationId(organisationId: string): Promise<BillModelPg[]> {
        return await BillModelPg.findAll({
            where: { organisationid: organisationId }
        });
    }
}
    