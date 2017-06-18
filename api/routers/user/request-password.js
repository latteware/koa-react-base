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
  handler: async function (ctx) {
    const { email } = ctx.request.body

    const user = await User.findOne({ email })
    ctx.assert(user, 404, 'User not found')

    await user.sendResetPasswordEmail()

    ctx.body = {}
  }
}
