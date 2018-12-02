import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TUser } from './user.entity';
import { AuthModule } from '../auth/auth.module';
@Module({
    imports: [
      TypeOrmModule.forFeature([TUser]),
      AuthModule,
    ],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
