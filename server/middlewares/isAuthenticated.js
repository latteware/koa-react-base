const User = require('../models/User')

module.exports = function * isAuthenticated (next) {
  const { userId } = this.session
  this.assert(userId, 403)

  this.user = yield User.findOne({ id: userId })
  this.assert(userId, 403)

  yield next
}
