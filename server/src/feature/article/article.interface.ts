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

export interface IPageOptions {
  size: number;
  start: number;
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

interface ITagInfo {
  code: number;
  name: string;
}