import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { TUser } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserRecord } from './user.interface';
import { MD5 } from 'crypto-js';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(TUser)
    private readonly userRepository: Repository<TUser>,
  ) { }
  root(): string {
    return 'Hello World!';
  }
  async getUsers(): Promise<IUserRecord> {
    const user = await this.userRepository.find({
      select: ['username', 'id', 'role'],
    });
    return {
      success: true,
      records: user,
    };
  }
  async deleteUsers(id): Promise<IUserRecord> {
    const user = await this.userRepository.findOne({ id });
    if (user.role === 1) throw new  HttpException('不能删除超级管理员', HttpStatus.FORBIDDEN);
    await this.userRepository.remove(user);
    return {
      success: true,
      records: '删除成功',
    };
  }
  async addUser({
    username,
    password,
    role,
  }): Promise<IUserRecord> {
    const hasUser = await this.userRepository.findOne({username});
    if (hasUser) throw new  HttpException('用户名已存在', HttpStatus.FORBIDDEN);
    const user = new TUser();
    // if (role === 1) throw new  HttpException('不能创建超级管理员', HttpStatus.FORBIDDEN);
    user.username = username;
    user.password = MD5(password).toString();
    user.role = role;
    await this.userRepository.save(user);
    return {
      success: true,
      records: '添加成功',
    };
  }
}