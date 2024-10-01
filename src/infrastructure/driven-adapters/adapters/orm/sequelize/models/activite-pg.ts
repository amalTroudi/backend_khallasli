import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ 
  tableName: 'activite', 
  timestamps: false  // Désactivation des timestamps
})
export class ActiviteModelPg extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public id_activite!: string;

    @Column({ type: DataType.STRING })
    public nom!: string;
}
