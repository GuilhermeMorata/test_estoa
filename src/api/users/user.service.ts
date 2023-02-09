import { Inject, Injectable } from '@nestjs/common';
import { UserTable } from 'src/entity/user.entity';
import { DatabaseModule } from 'src/helpers/database/database.module';
import { FilterUser, UserDto } from './dto/user.mode';
import { SignatureTable } from 'src/entity/signature.entity';
import { PlanTable } from 'src/entity/plan.entity';
import { Op } from 'sequelize';


@Injectable()
export class UsersService {

  constructor(
    @Inject("USER_REPOSITORY") private readonly userRepository: typeof UserTable,
    @Inject("PLAN_REPOSITORY") private readonly planRepository: typeof PlanTable,
    @Inject("SIGNATURE_REPOSITORY") private readonly signatureRepository: typeof SignatureTable 
  ) { }

  async create(user: UserDto): Promise<any> {
      const now = new Date();

      const User = await this.userRepository.create<UserTable>(user);
      const Plan = await this.planRepository.findOne({where : { name : 'Assinatura gratuita'}})
   
      await this.signatureRepository.create<SignatureTable>({
          id_user: User?.dataValues?.id_user,
          id_Plan: Plan?.dataValues?.id_Plan,
          expiration: new Date(now.setMonth(now.getMonth() + Plan?.dataValues?.period)),
          period: Plan?.dataValues?.period
      })

      return user
  }

  async edit(edit: UserDto): Promise<any> {
    if(!edit.id_user)throw Error
    const req : UserDto = {...edit}
    const test = await this.userRepository.update<UserTable>({ ...req }, { where: { id_user : edit.id_user }, returning: true });
    return test;
  }

  async delete(delet: number, req: any): Promise<number> {
    if(!delet) throw Error;
    await this.signatureRepository.destroy<SignatureTable>({where: {id_user : req.query.id}})
    return await this.userRepository.destroy<UserTable>({where:{ id_user : req.query.id}});
  }
  

  async findFilter(req: FilterUser): Promise<UserDto[]> {
    const res = await this.userRepository.findAll<UserTable>({
      where:{
        name : req?.name ? req.name :  {[Op.ne]: null},
        createdAt: req?.startDate && req?.endDate ? {[Op.between] :  [req?.startDate, req?.endDate] } :  {[Op.ne]: null},
        
    }});
    return res
  }
  
  async findAll(): Promise<UserDto[]> {
    return await this.userRepository.findAll<UserTable>({where:{}});
  }

  async findOneById(id: number): Promise<UserDto> {
      return await this.userRepository.findOne<UserTable>({ where: { id_user: id } });
  }



}


