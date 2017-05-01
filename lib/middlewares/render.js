const { webpack } = require('config')
const jwt = require('lib/jwt')

module.exports = function * () {
  // Don't render on api calls
  if (this.path.indexOf('/api') === 0) { return }

  if (this.flash) {
    this.state.flash = JSON.stringify(this.flash)
  }

  this.state.loggedIn = false
  if (this.state.user) {
    this.state.loggedIn = true
    this.state.jwt = jwt.sign({
      uuid: this.state.user.uuid,
      apiToken: this.state.user.apiToken
    })
  }

  yield this.render('index', webpack)
}
