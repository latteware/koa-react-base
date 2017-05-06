import { sessionActions } from './actions'

export const initialState = {
  jwt: window.localStorage.getItem('jwt')
}

export function sessionReducer (state = initialState, { payload, type }) {
  switch (type) {
    case sessionActions.LOGIN_SUCCESS:
    case sessionActions.SIGNUP_SUCCESS:
    case sessionActions.RESET_PASSWORD_SUCCESS:
      window.localStorage.setItem('jwt', payload.jwt)

      return {
        ...state,
        jwt: payload.jwt,
        loggedIn: true
      }

    case sessionActions.LOGOUT_SUCCESS:
      window.localStorage.removeItem('jwt')

      return {
        ...state,
        jwt: undefined,
        loggedIn: false
      }

    case sessionActions.REQUEST_PASSWORD_SUCCESS:
      return {
        ...state,
        loggedIn: false
      }

    case sessionActions.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loggedIn: payload.loggedIn,
        loaded: true,
        loadError: null,
        currentUser: payload.user
      }

    case sessionActions.GET_CURRENT_USER_FAILED:
      return {
        ...state,
        loaded: true,
        loadError: payload
      }

    default:
      return state
  }
}
