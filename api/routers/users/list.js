const User = require('models/User')

module.exports = {
  method: 'get',
  path: '/',
  handler: function * () {
    this.assert(this.state.user, 403)

    const users = yield User.find()
    const total = yield User.count()

    this.body = {
      users: users.map(user => user.format()),
      total
    }
  }
}
