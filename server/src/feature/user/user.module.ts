import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { AuthModule } from '../auth/auth.module';
@Module({
    imports: [
      TypeOrmModule.forFeature([UserEntity]),
      AuthModule,
    ],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
