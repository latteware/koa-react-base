import http from '../http'

export default {
  login: (data) => {
    return http.post('/api/user/login', data)
  },

  revoke: () => {
    return http.del('/api/user/', null)
  },

  getCurrentUser: () => {
    return http.get('/api/user/me')
  }
}
