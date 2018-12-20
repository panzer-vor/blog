export interface IArticle {
  id: number
  title: string
  desc: string
  accessCount: string
  accessAuthority: number
}

export interface IArticleRecords {
  data: IArticle[] | never[]
  total: number
  pageSize: number
  startPage: number
}

