import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({ tableName: 'organisation' ,
         timestamps: false 
})
export class OrganisationModelPg extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public id_organisation!: string;

    @Column({ type: DataType.STRING })
    public libelle !: string;     
    
}