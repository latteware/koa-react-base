const { v4 } = require('uuid')
const Mail = require('lib/mailer')

module.exports = function * sendResetPasswordEmail () {
  this.resetPasswordToken = v4()
  yield this.save()

  const data = this.toJSON()
  data.url = process.env.APP_HOST + '/emails/validate-email?token=' + this.resetPasswordToken + '&email=' + encodeURIComponent(this.email)

  const email = new Mail('send-validation')

  yield email.format(data)
  yield email.send({
    recipient: {
      email: this.email,
      name: this.displayName
    },
    title: 'Validate your email'
  })
}
