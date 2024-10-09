import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'wallet' ,

timestamps: false })
export class WalletModelPg extends Model {
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
    public commercial_id?: string; 

    @Column({ type: DataType.NUMBER })
    public total_credit?: number; 

    @Column({ type: DataType.NUMBER })
    public total_collect?: number; 
    
    @Column({ type: DataType.NUMBER })
    public credit_commercial?: number; 
    
   
}