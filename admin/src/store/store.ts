import { createStore } from 'redux'
import reducer from './reducer'
import { loadState } from '@tools/cacheState'
import { IState } from '@interface/state'

export const initialState: IState = {
  globalLoading: false,
  user: null,
}

const cacheState = loadState()
const state = cacheState || initialState

export const types = {
  CLEAR_STATE: 'CLEAR_STATE',
  LOAD_DATA: 'LOAD_DATA',
  SAVE_USER: 'SAVE_USER',
}

export default function makeStore() {
  return createStore(reducer, state)
}
