import { createStore } from 'redux'
import reducer from './reducer'

const state = {
  user: null,
}

export const types = {
  SAVE_USER: 'SAVE_USER',
}

export default function makeStore() {
  return createStore(reducer, state)
}
