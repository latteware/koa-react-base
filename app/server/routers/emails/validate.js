const User = require('models/User')

module.exports = {
  method: 'get',
  path: '/validate-email',
  handler: async function (ctx) {
    const { token, email } = ctx.query

    if (!email) {
      ctx.throw(401)
    }

    const user = await User.findOne({ email })

    if (user.resetPasswordToken !== token && !email) {
      ctx.throw(403)
    }

    user.validEmail = true
    await user.save()

    ctx.redirect('/app')
  }
}
