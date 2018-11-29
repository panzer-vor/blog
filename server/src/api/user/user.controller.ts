import { Get, Controller, Response } from '@nestjs/common';
import { UserService } from './user.service';
import { TUser } from './user.entity';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<TUser[]>{
    return this.userService.getUsers();
  }
}
