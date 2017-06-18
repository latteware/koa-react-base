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
  handler: async function (ctx) {
    const body = ctx.request.body

    const user = await User.findOne({ email: body.email })
    ctx.assert(user, 404, 'User not found')
    ctx.assert(
      user.resetPasswordToken === body.token,
      401,
      `Token doesn't match`
    )
    ctx.assert(
      body.password === body.confirmPassword,
      401,
      `Passwords doesn't match`
    )

    user.password = body.password
    user.resetPasswordToken = null
    await user.save()

    ctx.body = {
      user: user.format(),
      jwt: jwt.sign({
        uuid: user.uuid,
        apiToken: user.apiToken
      })
    }
  }
}
