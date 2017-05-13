import { dashboardActions } from './actions'

export const initialState = {
  loadedMetrics: false,
  metrics: {}
}

export function dashboardReducer (state = initialState, { payload, type }) {
  switch (type) {
    case dashboardActions.DASHBOARD_METRIC_SUCCESS:
      return {
        ...state,
        metrics: payload,
        loadedMetrics: true
      }

    default:
      return state
  }
}
