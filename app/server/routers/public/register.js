const Joi = require('koa-joi-router').Joi
const User = require('models/User')
const jwt = require('lib/jwt')

module.exports = {
  method: 'post',
  path: '/register',
  validate: {
    body: {
      screenName: Joi.string().required(),
      displayName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
    },
    type: 'json'
  },
  handler: function * () {
    const { screenName, displayName, email, password } = this.request.body

    const user = yield User.register(screenName, displayName, email, password)
    yield user.sendValidationEmail()

    this.session.userId = user.id

    this.body = {
      user: user.format(),
      jwt: jwt.sign({
        uuid: user.uuid,
        apiToken: user.apiToken
      })
    }
  }
}
