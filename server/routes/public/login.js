const { webpack } = require('../../../config')

module.exports = {
  method: 'get',
  path: '/login',
  handler: function *() {
    const { userId } = this.session

    if (userId) {
      this.redirect('/')
      return
    }

    yield this.render('login', Object.assign({
      error: this.flash.error || ''
    }, webpack))
  }
}
