
module.exports = {
  method: 'get',
  path: '/logout',
  handler: function *() {
    this.session.userId = null
    this.redirect('/login')
  }
}
