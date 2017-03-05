const User = require('../../models/User')

module.exports = {
  method: 'get',
  path: '/',
  handler: function *() {
    const users = yield User.find()
    this.body = users.map(user => user.format())
  }
}
