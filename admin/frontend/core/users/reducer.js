import { usersActions } from './actions'

export const initialState = {
  loadedList: false,
  loadedListError: '',
  list: [],
  total: null,
  loadedUser: false,
  currentUser: null
}

export function usersReducer (state = initialState, { payload, type }) {
  switch (type) {
    case usersActions.USER_LIST_SUCCESS:
      return {
        ...state,
        loadedListError: null,
        list: payload.data,
        total: payload.total,
        loadedList: true
      }

    case usersActions.USER_LIST_FAILED:
      return {
        ...state,
        loadedListError: payload.message,
        loadedList: true
      }

    case usersActions.USER_DETAILS_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        loadedUserError: null,
        loadedUser: true
      }

    case usersActions.USER_DETAILS_FAILED:
      return {
        ...state,
        loadedUserError: payload.message,
        loadedUser: true
      }

    default:
      return state
  }
}
