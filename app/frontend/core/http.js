import request from 'superagent'
import store from './store'

export default {
  get (endpoint, baseUrl) {
    return this.request('get', endpoint, null, baseUrl)
  },

  post (endpoint, data, baseUrl) {
    return this.request('post', endpoint, data, baseUrl)
  },

  put (endpoint, data, baseUrl) {
    return this.request('put', endpoint, data, baseUrl)
  },

  del (endpoint, data, baseUrl) {
    return this.request('del', endpoint, data, baseUrl)
  },

  request (method, endpoint, data, baseUrl) {
    const url = `${baseUrl || window.apiHost}${endpoint}`

    return new Promise((resolve, reject) => {
      const req = request[method](url)

      const headers = {}
      const state = store.getState()

      if (state.session.jwt) {
        headers['Content-Type'] = 'application/json'
        headers['Authorization'] = `Bearer ${state.session.jwt}`
      }

      req.set(headers)

      if (method === 'post' || method === 'put') {
        req.send(data)
      }

      req.end((err, res) => {
        if (!res) {
          return reject(new Error('Server Error: ' + err.message))
        }

        if (res.status !== 200) {
          if (res.body) {
            return reject(new Error(res.status + ':' + res.body.message))
          } else {
            return reject(new Error(res.status + ':' + res.text))
          }
        }

        resolve(res.body)
      })
    })
  }
}
