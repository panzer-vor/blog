import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserEntity } from '../user/user.entity';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from '../../config/globalConfig';
@Module({
    imports: [
      TypeOrmModule.forFeature([UserEntity]),
      PassportModule.register({ defaultStrategy: 'jwt' }),
      JwtModule.register({
        secretOrPrivateKey: jwtConfig.secretOrKey,
        signOptions: jwtConfig.signOptions,
      }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
