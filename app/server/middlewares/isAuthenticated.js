module.exports = function * isAuthenticated (next) {
  const { userId } = this.session

  this.assert(userId, 403)
  this.assert(this.state.user, 403)

  yield next
}
