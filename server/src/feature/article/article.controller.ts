import { Get, Controller, UseGuards, Delete, Param, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ArticleService } from './article.service';
import { IArticleRecord } from './article.interface';
import { ValidationPipe } from '@vail';
import { Roles } from '@roles';
import { identity } from 'rxjs';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/:size/:start')
  // async getArticles(@Param('size') size, @Param('start') start): Promise<IArticleRecord>{
  async getArticles(@Param('size') size, @Param('start') start): Promise<any>{
    return this.articleService.getArticles({
      size: Number(size),
      start: Number(start),
    });
  }
}
