

export interface IArticle {
  id: number
  title: string
  desc: string
  accessCount: string
  accessAuthority: number
  tags: ITags[];
}

export interface IArticleRecords {
  data: IArticle[]
  total: number
  pageSize: number
  startPage: number
}

interface ITags {
  code: number
  name: string
}

export interface IArticleFormat {
  id: number
  title: string
  desc: string
  accessCount: string
  accessAuthority: number
  tags: JSX.Element[] | null[]
  key: number
}

