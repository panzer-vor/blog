export interface ITag {
  name: string
  code: number
}

export interface IUpdateArticle {
  accessAuthority: number
  article: string
  desc: string
  title: string
  tags: ITag[]
}