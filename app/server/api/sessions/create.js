const Joi = require('koa-joi-router').Joi
const User = require('models/User')

module.exports = {
  method: 'post',
  path: '/',
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

    this.session.userId = user.id

    this.body = {user: user.format()}
  }
}
