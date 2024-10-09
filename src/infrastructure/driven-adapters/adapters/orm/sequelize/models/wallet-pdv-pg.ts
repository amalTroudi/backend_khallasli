import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'wallet_pdv' ,

timestamps: false })
export class WalletPdvModelPg extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public id_wallet!: string;

    @Column({ type: DataType.STRING })
    public balance!: string;

    @Column({ type: DataType.STRING })
    public status!: string;
   
    @Column({ type: DataType.STRING })
    public companyid?: string; 

    @Column({ type: DataType.NUMBER })
    public id_pdv?: number; 
    
    @Column({ type: DataType.DATE })
    public dt?: Date; 
    
   
}