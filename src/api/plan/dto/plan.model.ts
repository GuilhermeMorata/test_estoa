import { ApiProperty,  } from "@nestjs/swagger";

export class PlanDto{
    @ApiProperty({required: true, default: 1})
    id_Plan?: number;
    @ApiProperty({required: true, default: 'name'})
    name?: string;
    @ApiProperty({required: true, default: 1})
    value?: number;
    @ApiProperty({required: true, default: 1})
    period?: number;
    @ApiProperty({required: true, default: new Date()})
    createdAt?: Date; 
}

export class CreatePlan{
    @ApiProperty({required: true, default: 'name of plan'})
    name?: string;
    @ApiProperty({required: true, default: 1})
    value?: number;
    @ApiProperty({required: true, default: 1})
    period?: number;
}
