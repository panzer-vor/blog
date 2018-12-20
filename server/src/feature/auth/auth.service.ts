import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { TUser } from '@user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MD5 } from 'crypto-js';
import { ILoginRecord } from './auth.interface';
@Injectable()
export class AuthService {
  user: TUser;
  constructor(
    @InjectRepository(TUser)
    private readonly userRepository: Repository<TUser>,
    private readonly jwtService: JwtService,
  ) {}

  async signIn({
    username, password,
  }): Promise<ILoginRecord> {
    this.user = await this.userRepository.findOne({ username });
    if (this.user !== undefined && this.user.password === MD5(password).toString()) {
      return {
        success: true,
        records: {
          username: this.user.username,
          id: this.user.id,
          role: this.user.role,
          token: this.jwtService.sign({
            username: this.user.username,
            password: this.user.password,
            id: this.user.id,
            role: this.user.role,
          }),
        },
      };
    } else {
      return {
        success: false,
        records: '登入失败：账号或密码错误',
      };
    }
  }
}