import http from '../http'

export default {
  login: (data) => {
    return http.post('/sessions', data)
  },

  logout: () => {
    return http.del('/sessions')
  },

  resetPassword: (data) => {
    return http.post('/sessions/reset-password', data)
  },

  requestPassword: (data) => {
    return http.post('/sessions/request-password', data)
  },

  signUp: (data) => {
    return http.post('/register', data)
  },

  getCurrentUser: () => {
    return http.get('/sessions/me')
  }
}
