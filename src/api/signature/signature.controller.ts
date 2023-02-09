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
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { SignatureService } from './signature.service';
import { SignatureDto, editSignature, idSignature } from './dto/signature.model';



@ApiTags('Signature')
@Controller('signature')
export class SignatureController {

    constructor(private signatureService: SignatureService) {}

    @Get('Signatures')
    @ApiCreatedResponse({})
    async getSignatures(): Promise<SignatureDto[]> {
        return this.signatureService.findAll()
    }

    @Post('SignatureById')
    @ApiCreatedResponse({})
    async getSignature(@Body() id: idSignature): Promise<SignatureDto> {
        return this.signatureService.findOneById(id)
    }

    @Post('UserBySignature')
    @ApiCreatedResponse({type: idSignature})
    async getUser(@Body() id: idSignature ): Promise<any> {
        return this.signatureService.findUserBySignature(id)
    }

    @Get('SignaturesWithUsers')
    @ApiCreatedResponse({})
    async getUsers() : Promise<any>{
        return this.signatureService.findSignatureWithUsers()
    }

    @Put('EditSignature')
    @ApiCreatedResponse({})
    async editSignature(@Body() edit: editSignature): Promise<SignatureDto[]> {
        return this.signatureService.editSignature(edit)
    }

}
