import { Get, Controller, UseGuards, Delete, Param, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ArticleService } from './article.service';
import { IArticleRecord } from './article.interface';
import { AddArticleDto } from './vail/article.dto';
import { ValidationPipe } from '@vail';
import { Roles } from '@roles';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/:size/:start')
  async getArticles(@Param('size') size, @Param('start') start): Promise<IArticleRecord>{
    return this.articleService.getArticles({
      size: Number(size),
      start: Number(start),
    });
  }

  @Post()
  @UseGuards(AuthGuard())
  @Roles(1)
  async AddArticle(@Body(new ValidationPipe()) body: AddArticleDto): Promise<IArticleRecord> {
    return this.articleService.addArticle(body);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @Roles(1)
  async DeleteArticles(@Param() params): Promise<IArticleRecord> {
    return this.articleService.deleteArticle(params.id);
  }
}
