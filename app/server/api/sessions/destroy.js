module.exports = {
  method: 'delete',
  path: '/',
  handler: function * () {
    this.session.userId = null

    this.body = {
      success: true
    }
  }
}
