import { TUser } from './user.entity';
import { IHttpRecord } from '@interface/record.interface';
export interface IUserRecord extends IHttpRecord<TUser[]> {}
