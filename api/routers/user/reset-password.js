const Joi = require('koa-joi-router').Joi
const User = require('models/User')
const jwt = require('lib/auth/jwt')

module.exports = {
  method: 'post',
  path: '/reset-password',
  validate: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      confirmPassword: Joi.string().required(),
      token: Joi.string().required()
    },
    type: 'json'
  },
  handler: function * () {
    const body = this.request.body

    const user = yield User.findOne({email: body.email})
    this.assert(user, 404, 'User not found')
    this.assert(user.resetPasswordToken === body.token, 401, `Token doesn't match`)
    this.assert(body.password === body.confirmPassword, 401, `Passwords doesn't match`)

    user.password = body.password
    user.resetPasswordToken = null
    yield user.save()

    this.body = {
      user: user.format(),
      jwt: jwt.sign({
        uuid: user.uuid,
        apiToken: user.apiToken
      })
    }
  }
}
