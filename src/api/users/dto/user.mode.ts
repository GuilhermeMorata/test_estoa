import { ApiProperty,  } from "@nestjs/swagger";

export enum enumType{
    'male',
    'famle'
}


export class UserDto{
    @ApiProperty({required: true, default: 'id_user'})
    id_user?: number;
    @ApiProperty({required: true, default: 'name'})
    name?: string;
    @ApiProperty({required: true, default: 'email'})
    email?: string;
    @ApiProperty({required: true, default: 'password'})
    password?: string;
    @ApiProperty({required: true, default: 'male' })
    type?: enumType;
    @ApiProperty({required: true, default: new Date()})
    createdAt?: Date; 
}

export class CreateUser{
    @ApiProperty({required: true, default: 'name'})
    name?: string;
    @ApiProperty({required: true, default: 'email'})
    email?: string;
    @ApiProperty({required: true, default: 'password'})
    password?: string;
    @ApiProperty({required: true, default: 'male' })
    type?: enumType;
}

export class UpdateUser{
    @ApiProperty({required: true, default: 'id_user'})
    id_user?: number;
    @ApiProperty({required: true, default: 'name'})
    name?: string;
    @ApiProperty({required: true, default: 'email'})
    email?: string;
    @ApiProperty({required: true, default: 'password'})
    password?: string;
    @ApiProperty({required: true, default: 'male' })
    type?: enumType;
}


export class FilterUser{
    @ApiProperty({required: true, default: 'name'})
    name?: string;
    @ApiProperty({required: true, default: new Date()})
    startDate?: Date; 
    @ApiProperty({required: true, default: new Date()})
    endDate?: Date; 
}


