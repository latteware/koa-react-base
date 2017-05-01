const User = require('models/User')
const jwt = require('lib/jwt')
const { server } = require('config')

module.exports = function * isAuthenticated (next) {
  const { userId } = this.session || {}

  if (userId) {
    let user = yield User.findOne({ _id: userId })
    this.state.user = user
  }

  if (this.req.headers.authorization) {
    const [ method, token ] = this.req.headers.authorization.split(' ')

    if (method === 'Bearer') {
      const data = yield jwt.verify(token)

      let user = yield User.findOne({
        uuid: data.uuid,
        apiToken: data.apiToken
      })

      this.state.user = user
    }
  }

  this.state.appHost = server.appHost
  this.state.apiHost = server.apiHost

  yield next
}
