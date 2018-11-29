import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TUser } from './user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TUser])],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
