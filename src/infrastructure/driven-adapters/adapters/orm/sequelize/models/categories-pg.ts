import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({ tableName: 'categories' ,
         timestamps: false 
})
export class CategoriesModelPg extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public id_categorie!: string;

    @Column({ type: DataType.STRING })
    public label!: string;

    
}