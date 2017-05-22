import http from '../http'

export default {
  fetchMetrics: () => {
    return http.get('/api/dashboard/metrics')
  }
}
