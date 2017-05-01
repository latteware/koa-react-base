const { webpack } = require('config')

module.exports = function * () {
  // Don't render on api calls
  if (this.path.indexOf('/api') === 0) { return }

  if (this.flash) {
    this.state.flash = JSON.stringify(this.flash)
  }

  this.state.loggedIn = false
  if (this.state.user) {
    this.state.loggedIn = true
  }

  yield this.render('index', webpack)
}
