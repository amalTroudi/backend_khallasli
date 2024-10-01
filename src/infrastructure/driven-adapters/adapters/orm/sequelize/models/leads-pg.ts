import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({ tableName: 'leads' ,
         timestamps: false 
})
export class leadsModelPg extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public id_lead!: string;

    @Column({ type: DataType.INTEGER })
    public status!: Number;

    @Column({ type: DataType.STRING })
    public raison !: string;     

    @Column({ type: DataType.DATE})
     public dt_rdv !: Date;

    @Column({ type: DataType.STRING })
    public id_user!: string;

    @Column({ type: DataType.STRING })
    public id_report!: string;
    
}