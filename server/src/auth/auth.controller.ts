import { Controller, Get, Request , UseGuards, HttpStatus, HttpCode, Patch, Body, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ValidationPipe } from '../pipe/vaildation.pipe';
import { LoginUserDto } from '../api/user/vail/user.dto';

@UseInterceptors()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Patch('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body(new ValidationPipe()) loginUserDto: LoginUserDto, @Request () req): Promise<any> {
    return this.authService.signIn(req.body);
  }

  @Get('checklogin')
  @UseGuards(AuthGuard())
  public checkLogin() {
    return 'valid user: success';
  }
}