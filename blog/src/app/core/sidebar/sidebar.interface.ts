import { ITagInfo } from '../view/home/home.interface'

export interface ISiderbarTagInfo extends ITagInfo {
  count: number
}
export interface IHttpRecords {
  success: boolean
  records: ITagInfo[]
}
