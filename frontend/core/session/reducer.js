import { sessionActions } from './actions'

export const initialState = {
  loggedIn: false
}

export function sessionReducer (state = initialState, { payload, type }) {
  switch (type) {
    case sessionActions.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token
      }

    default:
      return state
  }
}
