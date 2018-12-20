import { DeepPartial } from 'redux'

interface IInitialState {
  user: null | {
    username: string
    role: number
  }
  globalLoading: boolean
}
export interface IState extends DeepPartial<IInitialState> {}