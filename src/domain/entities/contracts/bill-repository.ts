import { BillModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/bill-pg";

export const BILL_REPOSITORY = "BILL_REPOSITORY";

export interface IBillRepository {
    billRepository: () => Promise<BillModelPg[]> , 
    getBillSortedByAmountAS: () => Promise<BillModelPg[]> , 
    getBillSortedByAmountDesc: () => Promise<BillModelPg[]> ,
    getBillById: (id: number) => Promise<BillModelPg | null>,
    getBillByIdBill: (id_bill: string) => Promise<BillModelPg | null>;
    getBillByIdUser: (id_user: string) => Promise<BillModelPg | null>;
    getBillByOrganizationId: (organizationId: string) => Promise<BillModelPg[]>;

 

}
export class BillRepositoryImpl implements IBillRepository{
   
    async billRepository(): Promise<BillModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await BillModelPg.findAll();
    }   
    async getBillSortedByAmountAS(): Promise<BillModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre ascendant
        return await BillModelPg.findAll({
            order: [['amount', 'ASC']]
        });
    }
    async getBillSortedByAmountDesc(): Promise<BillModelPg[]> {
        // Récupérer les enregistrements triés par montant en ordre décroissant
        return await BillModelPg.findAll({
            order: [['amount', 'DESC']]
        });
    }
     //filter par id 
    async getBillById(id: number): Promise<BillModelPg | null> {
        return await BillModelPg.findOne({
            where: { id }
        });
    }
      //filter par id bill 
      async getBillByIdBill(id_bill: string): Promise<BillModelPg | null> {
        return await BillModelPg.findOne({
            where: { id_bill }
        });
    }
      //filter par id user
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