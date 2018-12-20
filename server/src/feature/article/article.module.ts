import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { ArticleEntity } from './article.entity';
import { ArticleTagEntity } from './article-tag.entity';
import { AuthModule } from '../auth/auth.module';
import { TagEntity } from './tag.entity';
@Module({
    imports: [
      TypeOrmModule.forFeature([ArticleEntity, TagEntity, ArticleTagEntity]),
      AuthModule,
    ],
    providers: [ArticleService],
    controllers: [ArticleController],
})
export class ArticleModule {}
