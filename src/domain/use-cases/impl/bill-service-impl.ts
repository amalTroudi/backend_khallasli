import { BILL_REPOSITORY, IBillRepository } from "@/domain/entities/contracts/bill-repository";
import { BillModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/bill-pg";
import { Adapter, Service } from "@tsclean/core";
import { IBillService } from "../bill-service";


@Service()
export class BillServiceImpl implements IBillService {
   
    constructor(
        @Adapter(BILL_REPOSITORY) private readonly billRepository: IBillRepository 
    ) {
    }

    async  billService(): Promise<BillModelPg[]> {
        return await this.billRepository.billRepository();
    }
      //  méthode pour récupérer les données triées par montant ass
      async getBillSortedByAmountAs(): Promise<BillModelPg[]> {
        return await this.billRepository.getBillSortedByAmountAS();
    }
    async getBillSortedByAmountDesc(): Promise<BillModelPg[]> {
        // Appel de la méthode pour récupérer les enregistrements triés en ordre décroissant
        return await this.billRepository.getBillSortedByAmountDesc();
    }
    
  
    async getBillById(id: number): Promise<BillModelPg | null> {
        return await this.billRepository.getBillById(id);
    }
    async getBillByIdBill(id_bill: string): Promise<BillModelPg | null> {
        return await this.billRepository.getBillByIdBill(id_bill);
    }
    async getBillByIdUser(id_user: string): Promise<BillModelPg | null> {
        return await this.billRepository.getBillByIdUser(id_user);
    }
    async getBillByOrganizationId(organisationId: string): Promise<BillModelPg[]> {
        return await this.billRepository.getBillByOrganizationId(organisationId);
    }
}