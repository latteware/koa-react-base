module.exports = {
  method: 'get',
  path: '/me',
  handler: function * () {
    if (this.state.user) {
      this.body = {
        loggedIn: true,
        user: yield this.state.user.toPublic()
      }
    } else {
      this.body = {
        loggedIn: false
      }
    }
  }
}
