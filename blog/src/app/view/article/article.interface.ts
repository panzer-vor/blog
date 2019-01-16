import { IArticleRecordWithTag } from '../home/home.interface'

export interface IHttpRecords {
  success: boolean
  records: IArticle
}
export interface IArticle extends IArticleRecordWithTag {
  article: string
}
