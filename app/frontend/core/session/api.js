import http from '../http'

export default {
  login: (data) => {
    return http.post('/sessions', data, window.appHost)
  },

  logout: () => {
    return http.del('/sessions', null, window.appHost)
  },

  resetPassword: (data) => {
    return http.post('/sessions/reset-password', data, window.appHost)
  },

  requestPassword: (data) => {
    return http.post('/sessions/request-password', data, window.appHost)
  },

  signUp: (data) => {
    return http.post('/register', data, window.appHost)
  },

  getCurrentUser: () => {
    return http.get('/api/users/me')
  }
}
