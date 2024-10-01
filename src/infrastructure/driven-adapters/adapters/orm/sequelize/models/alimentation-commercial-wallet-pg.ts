import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({ tableName: 'alimentation_commercial_wallet' ,
         timestamps: false 
})
export class AlimentationCommercialWalletModelPg extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public id_alimentation!: string;

    @Column({ type: DataType.INTEGER })
    public montant!: number;

    @Column({ type: DataType.STRING })
    public id_commercial !: string;

    @Column({ type: DataType.INTEGER })
    public status!: Number; 

     @Column({ type: DataType.DATE})
     public dt !: Date;
}