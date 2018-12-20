import { Injectable, HttpException, HttpStatus, Query } from '@nestjs/common';
import { ArticleEntity } from './article.entity';
import { TagEntity } from './tag.entity';
import { ArticleTagEntity } from './article-tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPageOptions, IArticleRecord } from './article.interface';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
    @InjectRepository(ArticleTagEntity)
    private readonly articleTagRepository: Repository<ArticleTagEntity>,
  ) { }
  async getArticles(pageOption: IPageOptions): Promise<any> {
    const { size, start } = pageOption;
    const pageOffset = start < 1 ? 0 : (start - 1) * size;
    const articles = await this.articleRepository
      .createQueryBuilder('article')
      .select(
        [
          'article.id',
          'article.accessCount',
          'article.cover',
          'article.title',
          'article.desc',
          'article.createTime',
          'article.accessAuthority',
        ],
      )
      .orderBy('article.createTime', 'DESC')
      .limit(size)
      .offset(pageOffset)
      .getManyAndCount();
    const [articleList, total] = articles;
    const articleIds = articleList.map(v => v.id);
    const articleTags = await this.articleTagRepository
      .createQueryBuilder('at')
      .where(`at.articleId in (${articleIds.join(',')})`)
      .getQuery();
    
    const records = {
      total,
      startPage: pageOffset,
      pageSize: size,
      data: articleList,
    };
    return {
      success: true,
      records,
    };
  }
}