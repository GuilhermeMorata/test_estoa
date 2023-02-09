import { Inject, Injectable } from '@nestjs/common';
import { PlanTable } from 'src/entity/plan.entity';
import { PlanDto } from './dto/plan.model';
import { SignatureTable } from 'src/entity/signature.entity';

@Injectable()
export class PlanService {

    constructor(
      @Inject("PLAN_REPOSITORY") private readonly planRepository: typeof PlanTable,
      @Inject("SIGNATURE_REPOSITORY") private readonly signatureRepository: typeof SignatureTable 
    
    ) {}

    async create(plan: PlanDto): Promise<PlanDto> {
        return await this.planRepository.create<PlanTable>(plan);
    }
  
    async edit(edit: PlanDto): Promise<any> {
      if(!edit.id_Plan) throw Error;
      const res = await this.planRepository.update<PlanTable>({ ...edit }, { where: {id_Plan : edit.id_Plan }, returning: true });
      return res;
    }
  
    async delete(delet: number, req: any): Promise<number> {
      if(!delet) throw Error;
      await this.signatureRepository.destroy<SignatureTable>({where: {id_user : req.query.id}})
      return await this.planRepository.destroy<PlanTable>({where:{id_Plan : req.query.id }});
    }
  
    
    async findAll(): Promise<any[]> {
      return await this.planRepository.findAll<PlanTable>({where:{}});
    }
  
    async findOneById(id: number): Promise<PlanDto> {
        return await this.planRepository.findOne<PlanTable>({ where: { id_Plan : id } });
    }

 }
