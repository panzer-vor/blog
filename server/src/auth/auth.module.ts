import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TUser } from '../api/user/user.entity';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
      TypeOrmModule.forFeature([TUser]),
      PassportModule.register({ defaultStrategy: 'jwt' }),
      JwtModule.register({
        secretOrPrivateKey: 'secretKey',
        signOptions: {
          expiresIn: 3600,
        },
      }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
