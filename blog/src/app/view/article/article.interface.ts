import { ITagInfo } from '../home/home.interface.ts'

export interface IHttpRecords {
  success: boolean
  records: IArticle
}
export interface IArticle extends IArticleRecordWithTag {
  article: string
}
