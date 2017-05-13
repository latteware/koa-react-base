import { call, fork, put, takeLatest } from 'redux-saga/effects'
import { usersActions } from './actions'
import api from './api'

export function * fetchUserList () {
  try {
    const data = yield call(api.fetch)

    yield put({ type: usersActions.USER_LIST_SUCCESS, payload: data })
  } catch (err) {
    yield put({ type: usersActions.USER_LIST_FAILED, payload: err })
  }
}

export function * fetchUserDetails ({payload}) {
  try {
    const data = yield call(api.fetchUser, payload)

    yield put({ type: usersActions.USER_DETAILS_SUCCESS, payload: data })
  } catch (err) {
    console.log('Error', err)
    yield put({ type: usersActions.USER_DETAILS_FAILED, payload: err })
  }
}

export function * watchUserList () {
  yield takeLatest(usersActions.USER_LIST_REQUEST, fetchUserList)
}

export function * watchUserDetails () {
  yield takeLatest(usersActions.USER_DETAILS_REQUEST, fetchUserDetails)
}

export const usersSagas = [
  fork(watchUserList),
  fork(watchUserDetails)
]
