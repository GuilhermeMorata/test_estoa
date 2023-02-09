import { ApiProperty,  } from "@nestjs/swagger";

export class SignatureDto{
    @ApiProperty({required: true, default: 1})
    id?: number;
    @ApiProperty({required: true, default: 1})
    id_user?: number;
    @ApiProperty({required: true, default: 1})
    id_Plan?: number;
    @ApiProperty({required: true, default: new Date()})
    expiration?: Date;
    @ApiProperty({required: true, default: 1})
    period?: number;
    @ApiProperty({required: true, default: new Date()})
    createdAt?: Date; 
}

export class editSignature{
    @ApiProperty({required: true, default: 1})
    id_user?: number;
    @ApiProperty({required: true, default: 1})
    id_Plan?: number;
    @ApiProperty({required: true, default: new Date()})
    expiration?: Date;
    @ApiProperty({required: true, default: 1})
    period?: number;
}

export class idSignature{
    @ApiProperty({required: true})
    id: number;
}

