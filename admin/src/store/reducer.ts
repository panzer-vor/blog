import { initialState, types } from './store';
import { saveState } from '@tools/cacheState'
import { IState } from '@interface/state'

export default function reducer(state: IState, action: any) {
  switch (action.type) {
    case types.SAVE_USER:
      const newState = {
        ...state,
        user: action.user,
      }
      saveState(newState)
      return newState
    case types.CLEAR_STATE:
      saveState(initialState)
      return initialState
    default:
      return state
  }
}