import { Get, Controller, UseGuards, Delete, Param, Post, Body, Patch } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ArticleService } from './article.service';
import { IArticleRecord, ITagRecord } from './article.interface';
import { AddArticleDto, UpdateArticleDto } from './vail/article.dto';
import { ValidationPipe } from '@vail';
import { Roles } from '@roles';
import { IHttpRecord } from '@interface/record.interface';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('tags')
  async getTags(): Promise<ITagRecord> {
    return this.articleService.getTags();
  }

  @Get('/:id')
  async getArticle(@Param('id') id): Promise<IHttpRecord<any>> {
    return this.articleService.getArticle(id);
  }

  @Get('/:size/:start')
  async getArticles(@Param('size') size, @Param('start') start): Promise<IArticleRecord>{
    return this.articleService.getArticles({
      size: Number(size),
      start: Number(start),
    });
  }

  @Get('/:size/:start/:keyword')
  async getArticlesByKeyword(@Param('size') size, @Param('start') start, @Param('keyword') keyword): Promise<IArticleRecord>{
    return this.articleService.getArticles({
      size: Number(size),
      start: Number(start),
      keyword,
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
  async DeleteArticle(@Param() params): Promise<IArticleRecord> {
    return this.articleService.deleteArticle(params.id);
  }

  @Patch()
  @UseGuards(AuthGuard())
  @Roles(2)
  async UpdateArticle(@Body(new ValidationPipe()) body: UpdateArticleDto): Promise<IArticleRecord> {
    return this.articleService.updateArticle(body);
  }
}
