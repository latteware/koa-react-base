module.exports = {
  method: 'get',
  path: '/me',
  handler: function * () {
    if (!this.state.user) {
      this.body = {loggedIn: false}
      return
    }

    if (!this.state.user.isAdmin) {
      this.body = {loggedIn: false}
      return
    }

    this.body = {
      loggedIn: true,
      user: yield this.state.user.toPublic()
    }
  }
}
