import { Controller, Get, UseGuards, HttpStatus, HttpCode, Patch, Body, UseInterceptors, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ValidationPipe } from '../../core/pipe/vaildation.pipe';
import { LoginUserDto } from '../user/vail/user.dto';
import { Roles } from '../../core/decorator/roles.decorator';
import { ILoginRecord } from './auth.interface';
@UseInterceptors()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Patch()
  @HttpCode(HttpStatus.OK)
  @Roles(10)
  async login(@Body(new ValidationPipe()) loginUserDto: LoginUserDto): Promise<ILoginRecord> {
    return this.authService.signIn(loginUserDto);
  }

  @Get('checklogin')
  @UseGuards(AuthGuard())
  @Roles(1)
  public checkLogin() {
    return 'valid user: success';
  }
}