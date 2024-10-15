import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'user' })
export class UserModelPg extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public name!: string;

    @Column({ type: DataType.STRING })
    public email!: string;

    @Column({ type: DataType.STRING })
    public password!: string;

    @Column({ type: DataType.STRING })
    public accessToken?: string; 

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    public roles!: string[]; 

    @Column({ type: DataType.STRING })
    public role!: string; 
}
