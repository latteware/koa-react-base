const { webpack } = require('../../config')

module.exports = function * () {
  if (!this.session.userId) {
    this.redirect('/login')
    return
  }

  yield this.render('index', Object.assign({
    filename: 'app.js'
  }, webpack))
}
