module.exports = {
  method: 'get',
  path: '/me',
  handler: function * () {
    console.log('User? =>', this.state.user)
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
