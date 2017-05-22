import http from '../http'

export default {
  fetch: (data) => {
    return http.get('/api/users', data)
  },

  fetchUser: (data) => {
    return http.get('/api/users/' + data.uuid)
  }
}
