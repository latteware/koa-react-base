const User = require('models/User')
const createUser = require('./createUser')

const password = '1234'
const email = 'u@app.com'

module.exports = function * authUser (agent) {
  const user = yield createUser({ email, password })

  return user.getJwt()
}
