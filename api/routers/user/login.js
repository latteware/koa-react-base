const Joi = require('koa-joi-router').Joi
const User = require('models/User')
const jwt = require('lib/auth/jwt')

module.exports = {
  method: 'post',
  path: '/login',
  validate: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    },
    type: 'json'
  },
  handler: function * () {
    const { email, password } = this.request.body
    const user = yield User.auth(email, password)

    this.body = {
      user: user.format(),
      jwt: jwt.sign({
        uuid: user.uuid,
        apiToken: user.apiToken
      })
    }
  }
}
