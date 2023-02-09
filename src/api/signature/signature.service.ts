
import { Inject, Injectable } from '@nestjs/common';
import { SignatureDto, editSignature, idSignature } from './dto/signature.model';
import { SignatureTable } from 'src/entity/signature.entity';
import { UserTable } from 'src/entity/user.entity';


@Injectable()
export class SignatureService {

    constructor(@Inject("SIGNATURE_REPOSITORY") private readonly signatureRepository: typeof SignatureTable ) { }


    async findAll(): Promise<SignatureTable[]> {
        return await this.signatureRepository.findAll<SignatureTable>({where:{}});
      }
    
    async findOneById(id: idSignature): Promise<SignatureTable> {
      return await this.signatureRepository.findOne<SignatureTable>({ where: { id : id.id } });
    }

    async findUserBySignature(id:idSignature): Promise<any> {
      return await this.signatureRepository.findAll<SignatureTable>({ where: { id: id.id} , include: UserTable});
    }

    async findSignatureWithUsers(): Promise<any> {
      return await this.signatureRepository.findAll<SignatureTable>({ where: {} , include: UserTable});
    }

    
    async editSignature(edit: editSignature): Promise<any> {
      if(!edit.id_user) throw Error;
      return await this.signatureRepository.update<SignatureTable>({ ...edit }, { where: { id_user : edit.id_user }, returning: true });
    }

    

 }
