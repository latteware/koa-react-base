export const usersActions = {
  USER_LIST_REQUEST: 'USER_LIST_REQUEST',
  USER_LIST_SUCCESS: 'USER_LIST_SUCCESS',
  USER_LIST_FAILED: 'USER_LIST_FAILED',

  USER_DETAILS_REQUEST: 'USER_DETAILS_REQUEST',
  USER_DETAILS_SUCCESS: 'USER_DETAILS_SUCCESS',
  USER_DETAILS_FAILED: 'USER_DETAILS_FAILED',

  fetch: (data) => ({
    type: usersActions.USER_LIST_REQUEST,
    payload: data
  }),

  fetchUser: (uuid) => {
    return {
      type: usersActions.USER_DETAILS_REQUEST,
      payload: {uuid}
    }
  }
}
