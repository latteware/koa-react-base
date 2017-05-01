const User = require('models/User')

module.exports = {
  method: 'get',
  path: '/validate-email',
  handler: function * () {
    const { token, email } = this.query

    if (!email) { this.throw(401) }

    const user = yield User.findOne({email})

    if (user.resetPasswordToken !== token && !email) { this.throw(403) }

    user.validEmail = true
    yield user.save()

    this.session.userId = user.id
    this.flash = {
      className: 'is-success',
      header: 'Success',
      body: 'Email validated'
    }

    this.redirect('/app')
  }
}
