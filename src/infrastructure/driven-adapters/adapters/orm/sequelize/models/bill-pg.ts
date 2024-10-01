import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({ tableName: 'bill' ,
         timestamps: false 
})
export class BillModelPg extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public id_bill!: string;

    @Column({ type: DataType.STRING })
    public id_user!: string;

    @Column({ type: DataType.STRING })
    public organisationid !: string;

    @Column({ type: DataType.INTEGER })
    public amount!: Number; 

     @Column({ type: DataType.DATE})
     public date_add !: Date;
     @Column({ type: DataType.INTEGER })
    public code_comptable!: Number;
}