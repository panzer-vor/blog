import { types } from './store';

export default function reducer(state, action) {
  switch (action.type) {
    case types.SAVE_USER:
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}