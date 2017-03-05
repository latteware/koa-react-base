module.exports = function * (next) {
  try {
    yield next
  } catch (err) {
    console.log(err.stack)
    this.body = { message: err.message }
    this.status = err.status || 500
  }
}
