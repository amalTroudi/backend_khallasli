import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({ tableName: 'history_wallet_pdv' ,
         timestamps: false 
})
export class HistoryWalletPdvModelPg extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public id_history!: string;

    @Column({ type: DataType.INTEGER })
    public new_balance!: number;

    @Column({ type: DataType.INTEGER })
    public old_balance !: number;

    @Column({ type: DataType.INTEGER })
    public debit!: Number; 

    @Column({ type: DataType.INTEGER })
    public montant_service!: Number;

    @Column({ type: DataType.INTEGER })
    public credit!: Number;

    @Column({ type: DataType.STRING })
    public service!: string;

     @Column({ type: DataType.DATE})
     public dt !: Date;

     @Column({ type: DataType.STRING })
     public id_wallet!: string;

     @Column({ type: DataType.INTEGER })
    public puv!: Number;

    @Column({ type: DataType.INTEGER })
    public qte!: Number;
}