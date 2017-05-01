const assert = require('http-assert')

module.exports = function * register (screenName, displayName, email, password) {
  const User = this

  const emailTaken = yield User.findOne({ email })
  assert(!emailTaken, 401, 'Email already in use')

  const screenTaken = yield User.findOne({ screenName })
  assert(!screenTaken, 401, 'Username already taken')

  // create in mongoose
  const createdUser = yield User.create({ screenName: screenName, displayName: displayName, email: email, password: password })

  return createdUser
}
