import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { DatabaseModule } from 'src/helpers/database/database.module';
import { usersProviders } from './user.providers';
import { planProviders } from '../plan/plan.providers';
import { signatureProviders } from '../signature/signature.providers';


@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UsersService,...usersProviders, ...planProviders,...signatureProviders],
})
export class UserModule { }
