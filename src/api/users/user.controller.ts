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
import { ApiCreatedResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UsersService } from './user.service';
import { UserDto, CreateUser, UpdateUser, FilterUser } from './dto/user.mode';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}

  @Post('CreateUser')
  async createUser(@Body() user: CreateUser ): Promise<UserDto> {
    return this.userService.create(user)
  }

  @Put('EditUser')
  @ApiCreatedResponse({ status: 200, description: 'success', type: UpdateUser })
  async editUser(@Body() user: UpdateUser ): Promise<UserDto> {
    return this.userService.edit(user)
  }

  @Delete(':id')
  @ApiQuery({name: 'id', type: Number })
  @ApiCreatedResponse({ status: 200, description: 'success',  type: Number  })
  async deleteUser(@Param('id') id: number, @Request() req ): Promise<number> {
    return this.userService.delete(id, req)
  }

  @Get('Users')
  @ApiCreatedResponse({ status: 200, description: 'success', })
  async getUsers(): Promise<UserDto[]> {
    return this.userService.findAll()
  }

  @Get(':id')
  @ApiCreatedResponse({ status: 200, description: 'success', })
  async getUser(@Param('id') id: number, @Request() req ): Promise<UserDto> {
    return this.userService.findOneById(id)
  }

  
  @Post('Filters')
  @ApiCreatedResponse({ status: 200, description: 'success', })
  async getUserFilter(@Body() filter: FilterUser ): Promise<any> {
    return  this.userService.findFilter(filter)
  }
}
