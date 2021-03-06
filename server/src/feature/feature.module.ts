import { Module } from '@nestjs/common';
import { FeatureController } from './feature.controller';
import { FeatureService } from './feature.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';
@Module({
  imports: [
    UserModule, // 用户模块
    AuthModule, // 验证/登入模块
    ArticleModule, // 博客模块
  ],
  controllers: [FeatureController],
  providers: [FeatureService],
})
export class FeatureModule {}
