import http from '../http'

export default {
  login: (data) => {
    return http.post('/api/user/login', data)
  },

  revoke: () => {
    return http.del('/api/user/', null)
  },

  resetPassword: (data) => {
    return http.post('/api/user/reset-password', data)
  },

  requestPassword: (data) => {
    return http.post('/api/user/request-password', data)
  },

  signUp: (data) => {
    return http.post('/api/user', data)
  },

  getCurrentUser: () => {
    return http.get('/api/user/me')
  }
}
