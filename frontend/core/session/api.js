import http from '../http'

export default {
  login: data => {
    return http.post('/login', data)
  }
}

