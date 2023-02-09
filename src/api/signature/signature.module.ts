import { SignatureService } from './signature.service';
import { SignatureController } from './signature.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/helpers/database/database.module';
import { signatureProviders } from './signature.providers';

@Module({
    imports: [ DatabaseModule],
    controllers: [ SignatureController],
    providers: [ SignatureService, ...signatureProviders ],
})
export class SignatureModule { }
