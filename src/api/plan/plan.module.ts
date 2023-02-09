import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/helpers/database/database.module';
import { planProviders } from './plan.providers';
import { signatureProviders } from '../signature/signature.providers';




@Module({
    imports: [DatabaseModule],
    controllers: [PlanController],
    providers: [PlanService,...planProviders, ...signatureProviders],
})
export class PlanModule { }
