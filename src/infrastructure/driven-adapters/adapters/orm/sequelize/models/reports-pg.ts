import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({ tableName: 'reports',
timestamps: false 
})
export class ReportsModelPg extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public id_report!: string;

    @Column({ type: DataType.STRING })
    public id_user!: string;

    @Column({ type: DataType.STRING })
    public boutique!: string;

    @Column({ type: DataType.STRING })
    public ville!: string;

    @Column({ type: DataType.STRING })
    public secteur!: string;

    @Column({ type: DataType.DATE})
    public dt !: Date;

    @Column({ type: DataType.STRING })
    public zone!: string; 

    @Column({ type: DataType.STRING })
    public poste!: string;

     @Column({ type: DataType.STRING})
     public banque!: string; 


     @Column({ type: DataType.STRING})
     public nom_banque!: string;
}