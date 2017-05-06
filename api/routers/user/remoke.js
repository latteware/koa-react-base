module.exports = {
  method: 'delete',
  path: '/',
  handler: function * () {
    this.body = {
      success: true
    }
  }
}
