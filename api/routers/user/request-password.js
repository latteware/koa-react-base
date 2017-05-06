const Joi = require('koa-joi-router').Joi
const User = require('models/User')

module.exports = {
  method: 'post',
  path: '/request-password',
  validate: {
    body: {
      email: Joi.string().email().required()
    },
    type: 'json'
  },
  handler: function * () {
    const { email } = this.request.body

    const user = yield User.findOne({email})
    this.assert(user, 404, 'User not found')

    yield user.sendResetPasswordEmail()

    this.body = {}
  }
}
