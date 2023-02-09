import {
    Controller,
    Get,
    Request,
    Post,
    Body,
    Param,
    Delete,
    Put
} from '@nestjs/common';
import { ApiCreatedResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PlanService } from './plan.service';
import { CreatePlan, PlanDto } from './dto/plan.model';

@ApiTags('Plan')
@Controller('plan')
export class PlanController { 

    constructor(private planService: PlanService) {}

    @Post('CreatePlan')
    @ApiCreatedResponse({ status: 200, description: 'success', type: CreatePlan })
    async createPlan(@Body() Plan: CreatePlan ): Promise<PlanDto> {
        return this.planService.create(Plan)
    }

    @Put('EditPlan')
    @ApiCreatedResponse({ status: 200, description: 'success', type: PlanDto })
    async editPlan(@Body() Plan: PlanDto ): Promise<PlanDto> {
        return this.planService.edit(Plan)
    }

    @Delete(':id')
    @ApiQuery({name: 'id', type: Number })
    @ApiCreatedResponse({ status: 200, description: 'success',  type: Number  })
    async deletePlan(@Param('id') id: number, @Request() req ): Promise<any> {
        return this.planService.delete(id, req)
    }

    @Get('Plans')
    @ApiCreatedResponse({})
    async getPlans(): Promise<any[]> {
        return this.planService.findAll()
    }

    @Get(':id')
    @ApiCreatedResponse({ status: 200, description: 'success', })
    async getPlan(@Param('id') id: number, @Request() req ): Promise<PlanDto> {
        return this.planService.findOneById(id)
    }

}
