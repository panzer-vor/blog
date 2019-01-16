import { ITagInfo } from '../../view/home/home.interface'

export interface ISidebarTagInfo extends ITagInfo {
  count: number
}
export interface IHttpRecords {
  success: boolean
  records: ISidebarTagInfo[]
}
