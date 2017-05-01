module.exports = function * (next) {
  try {
    yield next
  } catch (err) {
    this.body = { message: err.message }
    this.status = err.status || 500

    console.error('=>', err)
  }
}
