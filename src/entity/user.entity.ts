
import { Table, Column, Model, DataType ,  } from 'sequelize-typescript';
import { UserDto, enumType } from 'src/api/users/dto/user.mode';


@Table({tableName:'User'})
export class UserTable extends Model<UserDto>{
    @Column({
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
    })
    id_user: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.ENUM,
        values: ['male', 'female'],
        allowNull: false,
    })
    type: enumType;
    
    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })
    createdAt: Date; 
}