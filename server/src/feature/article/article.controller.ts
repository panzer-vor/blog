import { Get, Controller, UseGuards, Delete, Param, Post, Body, Patch } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ArticleService } from './article.service';
import { IArticleRecord, ITagRecord } from './article.interface';
import { AddArticleDto, UpdateArticleDto, UpdateTagDto, AddTagDto } from './vail/article.dto';
import { ValidationPipe } from '../../core/pipe/vaildation.pipe';
import { Roles } from '../../core/decorator/roles.decorator';
import { IHttpRecord } from '../../shared/interface/record.interface';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('tags')
  @Roles(10)
  async getTags(): Promise<ITagRecord> {
    return this.articleService.getTags();
  }

  @Get('/:id')
  @Roles(10)
  async getArticle(@Param('id') id): Promise<IHttpRecord<any>> {
    return this.articleService.getArticle(id);
  }

  @Get('/:size/:start')
  @Roles(10)
  async getArticles(@Param('size') size, @Param('start') start): Promise<IArticleRecord>{
    return this.articleService.getArticles({
      size: Number(size),
      start: Number(start),
    });
  }

  @Get('/:size/:start/:keyword')
  @Roles(10)
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

  @Patch('tag')
  @UseGuards(AuthGuard())
  @Roles(2)
  async UpdateTag(@Body(new ValidationPipe()) body: UpdateTagDto): Promise<ITagRecord> {
    return this.articleService.updateTag(body);
  }

  @Post('tag')
  @UseGuards(AuthGuard())
  @Roles(2)
  async AddTag(@Body(new ValidationPipe()) body: AddTagDto): Promise<ITagRecord> {
    return this.articleService.addTag(body);
  }

  @Delete('tag/:code')
  @UseGuards(AuthGuard())
  @Roles(2)
  async DeleteTag(@Param('code') code): Promise<ITagRecord> {
    return this.articleService.deleteTag(code);
  }
}
