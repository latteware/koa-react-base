export const dashboardActions = {
  DASHBOARD_METRIC_REQUEST: 'DASHBOARD_METRIC_REQUEST',
  DASHBOARD_METRIC_SUCCESS: 'DASHBOARD_METRIC_SUCCESS',

  fetchMetrics: () => ({
    type: dashboardActions.DASHBOARD_METRIC_REQUEST,
    payload: {}
  })

}
