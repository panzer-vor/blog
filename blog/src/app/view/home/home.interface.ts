export interface IHomeHash {
  code: string
}
export interface IHttpRecords {
  success: boolean
  records: {
    total: number
    startPage: number
    pageSize: number
    data: IArticleRecordWithTag[]
  }
}
export interface IArticleRecordWithTag {
  id: number;
  createTime: string
  accessCount: number
  title: string
  desc: string
  acessAuthority: number
  cover: string
  tags: ITagInfo[] | never[]
}
export interface ITagInfo {
  code: number
  name: string
}
