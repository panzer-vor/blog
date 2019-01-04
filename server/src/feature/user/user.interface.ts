import { UserEntity } from './user.entity';
import { IHttpRecord } from '../../shared/interface/record.interface';
export interface IUserRecord extends IHttpRecord<UserEntity[]> {}
