import { UserTable } from "src/entity/user.entity";

export const usersProviders = [
    {
        provide: "USER_REPOSITORY",
        useValue: UserTable,
    },
];
