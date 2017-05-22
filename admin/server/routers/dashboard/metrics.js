const User = require('models/User')

module.exports = {
  method: 'get',
  path: '/metrics',
  handler: function * () {
    const users = yield User.count()

    this.body = {
      users
    }
  }
}
