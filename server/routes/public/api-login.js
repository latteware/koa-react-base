const Joi = require('koa-joi-router').Joi
const User = require('../../models/User')

module.exports = {
  method: 'post',
  path: '/login',
  validate: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    },
    type: 'form'
  },
  handler: function *() {
    const { email, password } = this.request.body

    try {
      const user = yield User.auth(email, password)
      this.session.userId = user.id
      this.redirect('/')
    } catch (e) {
      this.flash = { error: e.message }
      this.redirect('/login')
    }
  }
}
