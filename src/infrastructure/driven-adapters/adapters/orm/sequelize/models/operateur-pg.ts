import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({ tableName: 'operateur' ,
         timestamps: false 
})
export class OpeerateurModelPg extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public id_operateur!: string;

    @Column({ type: DataType.STRING })
    public id_operateur_topup !: string;     


    @Column({ type: DataType.STRING })
    public libelle!: string;

   
    
}