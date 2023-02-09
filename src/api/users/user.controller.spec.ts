import { Test, TestingModule } from '@nestjs/testing';
import { CacheModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { usersProviders } from './user.providers';
import { planProviders } from '../plan/plan.providers';
import { signatureProviders } from '../signature/signature.providers';
import { UserDto } from './dto/user.mode';
import { UserTable } from 'src/entity/user.entity';


describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [CacheModule.register()],
      controllers: [UserController],
      providers: [UsersService,...usersProviders, ...planProviders,...signatureProviders, UserTable],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('hasProductsWithBatteries', () => {
    it('should return true if the service returns true', () => {
      const params = {
        universe: 'marvel',
      };
      expect(userController.getUsers())
    });
  });
});
