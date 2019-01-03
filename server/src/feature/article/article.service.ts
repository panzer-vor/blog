import { Injectable, HttpException, HttpStatus, Query } from '@nestjs/common';
import { ArticleEntity } from './article.entity';
import { TagEntity } from './tag.entity';
import { ArticleTagEntity } from './article-tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IQueryOptions, IArticleRecord, IArticleUpdate, ITagRecord } from './article.interface';
import { IHttpRecord } from '../../shared/interface/record.interface';

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
  async getTags(): Promise<ITagRecord> {
    const tagsInfo = await this.tagRepository.find();
    const tagsInfoFormat = tagsInfo.map(v => ({
      name: v.name,
      code: v.code,
    }));
    return {
      success: true,
      records: tagsInfoFormat,
    };
  }
  async updateTag(body): Promise<ITagRecord> {
    const tagRow = await this.tagRepository.findOne({ code: body.code });
    const updateData = {
      name: body.name,
      code: body.code,
    };
    await this.tagRepository.update(tagRow, updateData);
    return {
      success: true,
      records: '修改成功',
    };
  }
  async deleteTag(code): Promise<ITagRecord> {
    const tag = await this.tagRepository.findOne({ code });
    await this.tagRepository.remove(tag);
    const articleTag = await this.articleTagRepository.find({
      tagCode: code,
    });
    await this.articleTagRepository.remove(articleTag);
    return {
      success: true,
      records: '删除成功',
    };
  }
  async addTag(body): Promise<ITagRecord> {
    const tagRow = new TagEntity();
    tagRow.name = body.name;
    await this.tagRepository.save(tagRow);
    return {
      success: true,
      records: '添加成功',
    };
  }
  async getArticle(id): Promise<IHttpRecord<any>> {
    const article = await this.articleRepository
      .createQueryBuilder('a')
      .select(
        [
          'a.cover',
          'a.title',
          'a.desc',
          'a.accessAuthority',
          'a.article'
        ],
      )
      .where(`a.id = ${id}`)
      .getMany();
    const tags = await this.tagRepository.find();
    const articleTags = await this.articleTagRepository.find({ articleId: id });
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
    const articleData = {
      ...article[0],
      tags: [],
    };
    for (const tag of articleTagsFormat) {
      articleData.tags.push({
        code: tag.tagCode,
        name: tag.name,
      });
    }
    return {
      success: true,
      records: articleData,
    };
  }
  async getArticles(option: IQueryOptions): Promise<IArticleRecord> {
    const { size, start, keyword = '' } = option;
    const pageOffset = (start - 1) * size;
    const limitSize = size;
    const articles = await this.articleRepository
      .createQueryBuilder('a')
      .select(
        [
          'a.id',
          'a.accessCount',
          'a.cover',
          'a.title',
          'a.desc',
          'a.createTime',
          'a.accessAuthority',
        ],
      )
      .leftJoin('t_article_tag', 'at', 'at.articleId = a.id')
      .leftJoin('t_tag', 't', 't.code = at.tagCode')
      .where(`a.title LIKE '%${keyword}%'`)
      .orWhere(`a.desc LIKE '%${keyword}%'`)
      .orWhere(`t.name LIKE '%${keyword}%'`)
      .orderBy('a.createTime', 'DESC')
      .groupBy('a.id')
      .limit(limitSize)
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
    desc = '',
    tagCodes = [],
  }): Promise<IArticleRecord> {
    const articleRow = new ArticleEntity();
    articleRow.article = article;
    articleRow.title = title;
    articleRow.accessAuthority = accessAuthority;
    articleRow.desc = desc;
    const savedArticle = await this.articleRepository.save(articleRow);
    for (const code of tagCodes) {
      const articleTagRow = new ArticleTagEntity();
      articleTagRow.articleId = savedArticle.id;
      articleTagRow.tagCode = Number(code);
      await this.articleTagRepository.save(articleTagRow);
    }
    return {
      success: true,
      records: '添加成功',
    };
  }
  async deleteArticle(id: number): Promise<IArticleRecord> {
    const article = await this.articleRepository.findOne({ id });
    await this.articleRepository.remove(article);
    const articleTag = await this.articleTagRepository.find({
      articleId: id,
    });
    await this.articleTagRepository.remove(articleTag);
    return {
      success: true,
      records: '删除成功',
    };
  }
  async updateArticle(body: IArticleUpdate): Promise<IArticleRecord> {
    const { id, tagCodes } = body;
    const updateData = {
      id,
      article: body.article,
      title: body.title,
      desc: body.desc,
      accessAuthority: body.accessAuthority,
    };
    await this.articleRepository.save(updateData);
    const articleTag = await this.articleTagRepository.find({
      articleId: id,
    });
    await this.articleTagRepository.remove(articleTag);
    for (const code of tagCodes) {
      const articleTagRow = new ArticleTagEntity();
      articleTagRow.articleId = id;
      articleTagRow.tagCode = Number(code);
      await this.articleTagRepository.save(articleTagRow);
    }
    return {
      success: true,
      records: '修改成功',
    };
  }
}