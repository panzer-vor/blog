import { NestFactory, Reflector  } from '@nestjs/core';
import { AppModule } from './app.module';
import { RolesGuard } from './core/guard/auth.guard';
import { HttpExceptionFilter } from './core/exception/HTTP-exception.filter';
import { options } from './config/globalConfig';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(options.uri);
  app.useGlobalGuards(new RolesGuard(new Reflector()));
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(options.port || 7001);
}
bootstrap();
