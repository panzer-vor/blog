import { IHttpRecord } from '@interface/record.interface';

interface ILoginData {
  username: string;
  password: string;
  id: number;
  role: number;
  token: string;
}

export interface ILoginRecord extends IHTTPRecord<ILoginData> {}