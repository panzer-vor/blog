import { Get, Controller, UseGuards, Delete, Param, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { IUserRecord } from './user.interface';
import { ValidationPipe } from '@vail';
import { AddUserDto } from './vail/user.dto';
import { Roles } from '@roles';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard())
  @Roles(10)
  async getUsers(): Promise<IUserRecord>{
    return this.userService.getUsers();
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @Roles(1)
  async DeleteUsers(@Param() params): Promise<IUserRecord> {
    return this.userService.deleteUsers(params.id);
  }

  @Post()
  @UseGuards(AuthGuard())
  @Roles(1)
  async AddUser(@Body(new ValidationPipe()) body: AddUserDto): Promise<IUserRecord> {
    return this.userService.addUser(body);
  }
}
