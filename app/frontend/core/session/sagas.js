import { push } from 'react-router-redux'
import { call, fork, put, takeLatest } from 'redux-saga/effects'
import { startSubmit, stopSubmit } from 'redux-form'
import { sessionActions } from './actions'
import api from './api'

export function * login ({ payload }) {
  const formId = 'login'
  yield put(startSubmit(formId))

  try {
    const data = yield call(api.login, payload)

    yield put({ type: sessionActions.LOGIN_SUCCESS, payload: data })
    yield put(stopSubmit(formId))

    yield call(getCurrentUser)
    yield put(push('/app'))
  } catch (err) {
    yield put(stopSubmit(formId, { _error: err.message }))
  }
}

export function * signUp ({ payload }) {
  const formId = 'signUp'
  yield put(startSubmit(formId))

  try {
    const { screenName, displayName, email, password } = payload

    const data = yield call(api.signUp, { screenName, displayName, email, password })

    yield put({ type: sessionActions.SIGNUP_SUCCESS, payload: { ...data } })
    yield put(stopSubmit(formId))

    yield call(getCurrentUser)

    yield put(push('/app'))
  } catch (err) {
    yield put(stopSubmit(formId, { _error: err.message }))
  }
}

export function * logout () {
  yield call(api.logout)
  yield put({ type: sessionActions.LOGOUT_SUCCESS, payload: {} })

  yield call(getCurrentUser)
  yield put(push('/'))
}

export function * resetPassword ({ payload }) {
  const formId = 'resetPassword'

  yield put(startSubmit(formId))
  try {
    const data = yield call(api.resetPassword, payload)

    yield put({ type: sessionActions.RESET_PASSWORD_SUCCESS, payload: data })
    yield put(stopSubmit(formId, {}))

    yield call(getCurrentUser)

    yield put(push('/app'))
  } catch (err) {
    yield put(stopSubmit(formId, { _error: err.message }))
  }
}

export function * requestPassword ({ payload }) {
  const formId = 'requestPassword'

  yield put(startSubmit(formId))
  try {
    yield call(api.requestPassword, payload)
    yield put({ type: sessionActions.REQUEST_PASSWORD_SUCCESS, payload: {success: true} })
    yield put(stopSubmit(formId))
  } catch (err) {
    yield put(stopSubmit(formId, { _error: err.message }))
  }
}

export function * getCurrentUser () {
  try {
    const userData = yield call(api.getCurrentUser)
    yield put({ type: sessionActions.GET_CURRENT_USER_SUCCESS, payload: userData })
  } catch (err) {
    yield put({ type: sessionActions.GET_CURRENT_USER_FAILED, payload: err })
  }
}

export function * watchLogin () {
  yield takeLatest(sessionActions.LOGIN_REQUEST, login)
}

export function * watchLogout () {
  yield takeLatest(sessionActions.LOGOUT_REQUEST, logout)
}

export function * watchResetPassword () {
  yield takeLatest(sessionActions.RESET_PASSWORD_REQUEST, resetPassword)
}

export function * watchRequestPassword () {
  yield takeLatest(sessionActions.REQUEST_PASSWORD_REQUEST, requestPassword)
}

export function * watchSignUp () {
  yield takeLatest(sessionActions.SIGNUP_REQUEST, signUp)
}

export function * watchGetCurrentUser () {
  yield takeLatest(sessionActions.GET_CURRENT_USER_REQUEST, getCurrentUser)
}

export const sessionSagas = [
  fork(watchLogin),
  fork(watchLogout),
  fork(watchResetPassword),
  fork(watchRequestPassword),
  fork(watchSignUp),
  fork(watchGetCurrentUser)
]
