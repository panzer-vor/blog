// 通用http返回接口

export interface IHttpRecord<T> {
  status?: number;
  success: boolean;
  records: T | string | object;
}