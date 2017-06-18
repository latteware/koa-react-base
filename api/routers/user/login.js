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
  handler: async function (ctx) {
    const { email, password } = ctx.request.body
    const user = await User.auth(email, password)

    ctx.body = {
      user: user.format(),
      jwt: jwt.sign({
        uuid: user.uuid,
        apiToken: user.apiToken
      })
    }
  }
}
