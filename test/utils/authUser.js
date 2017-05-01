const User = require('models/User')
const createUser = require('./createUser')

const password = '1234'
const email = 'u@app.com'

module.exports = function * authUser (agent) {
  yield User.remove({ email })
  yield createUser({ email, password })
  yield agent
    .post('/api/sessions')
    .send({ email, password })
    .then()
}
