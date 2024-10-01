import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({ tableName: 'pdv',
timestamps: false 
})
export class PdvModelPg extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public id_pdv!: string;

    @Column({ type: DataType.STRING })
    public id_commercial!: string;

    @Column({ type: DataType.STRING })
    public pos!: string;

    @Column({ type: DataType.INTEGER })
    public code_comptable!: number;

    @Column({ type: DataType.STRING })
    public ville!: string;

    @Column({ type: DataType.DATE})
    public dt !: Date;

    @Column({ type: DataType.STRING })
    public id_categorie!: string; 

    @Column({ type: DataType.STRING })
    public region!: string;

     @Column({ type: DataType.STRING})
     public etat!: string; 
}