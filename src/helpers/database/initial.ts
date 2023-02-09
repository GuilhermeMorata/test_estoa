import sequelize from "sequelize";
import { PlanTable } from "src/entity/plan.entity";

export default async function initial(){
    const base  = await PlanTable.findOne<PlanTable>({ where : {name : 'Assinatura gratuita'}})
    return base? 
        null 
    : 
        PlanTable.create<PlanTable>({
        name: 'Assinatura gratuita',
        value: 0,
        period: 1,
        })
}