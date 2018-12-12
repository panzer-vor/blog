import { DeepPartial } from 'redux'

interface IInitialState {
  user: null | {
    username: string
    role: number
  };
}
export interface IState extends DeepPartial<IInitialState> {}