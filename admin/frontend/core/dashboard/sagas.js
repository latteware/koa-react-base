import { call, fork, put, takeLatest } from 'redux-saga/effects'
import { dashboardActions } from './actions'
import api from './api'

export function * fetchMetrics () {
  const data = yield call(api.fetchMetrics)

  yield put({ type: dashboardActions.DASHBOARD_METRIC_SUCCESS, payload: data })
}

export function * watchMetrics () {
  yield takeLatest(dashboardActions.DASHBOARD_METRIC_REQUEST, fetchMetrics)
}

export const dashboardSagas = [
  fork(watchMetrics)
]
