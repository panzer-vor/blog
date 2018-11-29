import { Module, CacheModule, CacheInterceptor, DynamicModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import * as Path from 'path';

const Orm = (): DynamicModule => {

  const config = new ConfigService(`env/${process.env.NODE_ENV}.env`);

  return TypeOrmModule.forRoot({
    type: 'mysql',
    host: config.databaseHost,
    port: config.databasePort,
    username: config.databaseUserName,
    password: config.databasePassword,
    database: config.databaseName,
    entities: [Path.resolve(__dirname, `src/**/**/**.entity{.ts,.js}`)],
  });
};

@Module({
  imports: [
    Orm(),
    UserModule,
    AuthModule,
    CacheModule.register(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
