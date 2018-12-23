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
  async getArticles(pageOption: IPageOptions): Promise<IArticleRecord> {
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
      .getMany();
    const tags = await this.tagRepository.find();
    const articleTagsFormat = articleTags.map(v => {
      for (const k of tags) {
        if (k.code === v.tagCode) {
          return {
            ...v,
            name: k.name,
          };
        }
      }
    });
    const articleData = [];
    articleList.forEach((v, i) => {
      articleData.push({
        ...v,
        tags: [],
      });
      for (const k of articleTagsFormat) {
        if (v.id === k.articleId) {
          articleData[i].tags.push({
            code: k.tagCode,
            name: k.name,
          });
        }
      }
    });
    const records = {
      total,
      startPage: pageOffset,
      pageSize: size,
      data: articleData,
    };
    return {
      success: true,
      records,
    };
  }
  async addArticle({
    article,
    title,
    accessAuthority,
    desc,
  }): Promise<IArticleRecord> {
    const articleRow = new ArticleEntity();
    articleRow.article = article;
    articleRow.title = title;
    articleRow.accessAuthority = accessAuthority;
    articleRow.desc = desc;
    await this.articleRepository.save(articleRow);
    return {
      success: true,
      records: '添加成功',
    };
  }
  async deleteArticle(id): Promise<IArticleRecord> {
    const article = await this.articleRepository.findOne({ id });
    await this.articleRepository.remove(article);
    return {
      success: true,
      records: '删除成功',
    };
  }
}