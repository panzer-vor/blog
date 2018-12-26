import { NestFactory, Reflector  } from '@nestjs/core';
import { AppModule } from './app.module';
import { RolesGuard } from '@guard/auth.guard';
import { HttpExceptionFilter } from './core/exception/HTTP-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalGuards(new RolesGuard(new Reflector()));
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(7001);
}
bootstrap();
