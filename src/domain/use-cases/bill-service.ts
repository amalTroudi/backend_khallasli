import { BillModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/bill-pg";

export const BILL_SERVICE = "BILL_SERVICE";

export interface IBillService {
    billService: () => Promise<BillModelPg[]>,
    getBillSortedByAmountAs: () => Promise<BillModelPg[]> , 
    getBillSortedByAmountDesc: () => Promise<BillModelPg[]> ,
    getBillById: (id: number) => Promise<BillModelPg | null>;
    getBillByIdBill: (id_bill: string) => Promise<BillModelPg | null>;
    getBillByIdUser: (id_user: string) => Promise<BillModelPg | null>;
    getBillByOrganizationId :(organisationId: string)=> Promise<BillModelPg[]>

}