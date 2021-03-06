import { IHttpRecord } from '../../shared/interface/record.interface';

interface ILoginData {
  username: string;
  id: number;
  role: number;
  token: string;
}

export interface ILoginRecord extends IHttpRecord<ILoginData> {}