
import { Table, Column, Model, DataType, ForeignKey ,  } from 'sequelize-typescript';

import { UserTable } from './user.entity';
import {  PlanTable } from './plan.entity';
import { SignatureDto } from 'src/api/signature/dto/signature.model';


@Table({tableName:'Signature'})
export class SignatureTable extends Model<SignatureDto> {

    @Column({
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
    })
    id: number;


    @ForeignKey(() => UserTable)
    @Column({
        field: 'id_user',
        type: DataType.INTEGER
    })
    id_user: number;

    
    @ForeignKey(() => PlanTable)
    @Column({
        field: 'id_Plan',
        type: DataType.INTEGER
    })
    id_Plan: number;
        
        
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    period: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })
    expiration: Date; 

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })
    createdAt: Date; 

}
