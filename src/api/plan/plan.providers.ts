import { PlanTable } from "src/entity/plan.entity";

export const planProviders = [
    {
        provide: "PLAN_REPOSITORY",
        useValue: PlanTable,
    },
];
