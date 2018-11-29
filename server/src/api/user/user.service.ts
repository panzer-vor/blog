import { Injectable } from '@nestjs/common';
import { TUser } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(TUser)
  private readonly userRepository: Repository<TUser>) { }
  root(): string {
    return 'Hello World!';
  }
  async getUsers(): Promise<TUser[]> {
    return await this.userRepository.find();
  }
}