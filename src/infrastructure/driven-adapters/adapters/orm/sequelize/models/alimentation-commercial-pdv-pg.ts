import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({ tableName: 'alimentation_commercial_pdv' ,
         timestamps: false 
})
export class AlimentationCommercialPdvModelPg extends Model {
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
   
    @Column({ type: DataType.STRING })
    public id_pdv!: string; 

    @Column({ type: DataType.INTEGER })
    public status!: Number; 

     @Column({ type: DataType.STRING})
     public approuve_par !: string;

     @Column({ type: DataType.STRING})
     public rejete_par !: string;

     @Column({ type: DataType.DATE})
     public dt !: Date;
}