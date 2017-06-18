const Joi = require('koa-joi-router').Joi
const User = require('models/User')
const jwt = require('lib/auth/jwt')

module.exports = {
  method: 'post',
  path: '/',
  validate: {
    body: {
      screenName: Joi.string().required(),
      displayName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
    },
    type: 'json'
  },
  handler: async function (ctx) {
    const { screenName, displayName, email, password } = ctx.request.body

    const user = await User.register(screenName, displayName, email, password)
    await user.sendValidationEmail()

    ctx.body = {
      user: user.format(),
      jwt: jwt.sign({
        uuid: user.uuid,
        apiToken: user.apiToken
      })
    }
  }
}
