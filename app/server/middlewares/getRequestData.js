const User = require('models/User')

module.exports = function * isAuthenticated (next) {
  const { userId } = this.session

  if (userId) {
    let user = yield User.findOne({ _id: userId })
    this.state.user = user
  }

  yield next
}
