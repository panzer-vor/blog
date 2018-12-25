import { ArticleEntity } from './article.entity';
import { IHttpRecord } from '@interface/record.interface';
export interface IArticleRecord extends IHttpRecord<ArticleEntity[]> {
  records: string | {
    total: number;
    startPage: number;
    pageSize: number;
    data: IArticleRecordWithTag[];
  };
}

export interface IQueryOptions {
  size: number;
  start: number;
  keyword?: string;
}

export interface IArticleRecordWithTag {
  id: number;
  createTime: string;
  accessCount: number;
  title: string;
  desc: string;
  acessAuthority: number;
  cover: string;
  tags: ITagInfo[] | never[];
}

export interface IArticleUpdate {
  id: number;
  article: string;
  title: string;
  desc?: string;
  accessAuthority: number;
  tagCodes?: string[];
}

interface ITagInfo {
  code: number;
  name: string;
}

export interface ITagRecord extends IHttpRecord<ArticleEntity[]> {
  records: string | ITagInfo[];
}