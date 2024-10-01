import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({ tableName: 'demande_alimentation_pdv' ,
         timestamps: false 
})
export class DemandeAlimentationPdvModelPg extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public id_alimentation!: string;
    

    @Column({ type: DataType.INTEGER })
    public ref!: number;

    @Column({ type: DataType.INTEGER })
    public bordereau_number !: number;

    @Column({ type: DataType.STRING })
    public approve_par!: string;

    @Column({ type: DataType.INTEGER })
    public montant!: Number;

    @Column({ type: DataType.STRING })
    public bank!: string;

    @Column({ type: DataType.INTEGER })
    public status!: Number; 

    @Column({ type: DataType.STRING })
    public id_wallet!: string;

     @Column({ type: DataType.DATE})
     public dt !: Date;
     @Column({ type: DataType.DATE})
     public update_at !: Date;

     @Column({ type: DataType.INTEGER })
     public riembursed!: Number; 
}