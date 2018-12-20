import { TArticle } from './article.entity';
import { IHttpRecord } from '@interface/record.interface';
export interface IArticleRecord extends IHttpRecord<TArticle[]> {
  records: string | {
    total: number;
    startPage: number;
    pageSize: number;
    data: TArticle[];
  };
}

export interface IPageOptions {
  size: number;
  start: number;
}