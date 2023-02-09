
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './helpers/database/database.module';
import { PlanModule } from './api/plan/plan.module';
import { SignatureModule } from './api/signature/signature.module';
import { UserModule } from './api/users/user.module';


@Module({
  imports: [
    SignatureModule,
    PlanModule,
    DatabaseModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  providers: [],
  exports: [],
})
export class AppModule { }