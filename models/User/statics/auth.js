const assert = require('http-assert')
const bcrypt = require('bcrypt')

module.exports = function * auth (email, password) {
  const User = this

  const user = yield User.findOne({ email })
  assert(user, 401, 'Invalid email/password')

  const isValid = yield new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, compared) =>
      (err ? reject(err) : resolve(compared))
    )
  })
  assert(isValid, 401, 'Invalid email/password')

  return user
}
