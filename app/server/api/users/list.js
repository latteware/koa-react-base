const User = require('models/User')

module.exports = {
  method: 'get',
  path: '/',
  handler: function * () {
    const users = yield User.find()
    const total = yield User.count()

    this.body = {
      users: users.map(user => user.format()),
      total
    }
  }
}
