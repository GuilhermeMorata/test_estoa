
import { Table, Column, Model, DataType ,  } from 'sequelize-typescript';
import { PlanDto } from 'src/api/plan/dto/plan.model';


@Table({tableName:'Plan'})
export class PlanTable extends Model<PlanDto>{
    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })
    createdAt: Date; 

    @Column({
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
    })
    id_Plan: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    period: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    value: number;
}