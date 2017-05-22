module.exports = function * isAdmin (next) {
  if (!this.state.user) { return this.throw(403) }
  if (!this.state.user.isAdmin) { return this.throw(403) }

  yield next
}
