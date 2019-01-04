import { DeepPartial } from 'redux'

interface IInitialState {
  user: {
    username: string
    role: number
  }
  globalLoading: boolean
}
export interface IState extends DeepPartial<IInitialState> {}