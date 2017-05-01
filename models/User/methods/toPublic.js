module.exports = function * toPublic () {
  return {
    uuid: this.uuid,
    name: this.name,
    validEmail: this.validEmail
  }
}
