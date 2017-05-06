const jwt = require('lib/auth/jwt')

module.exports = function getJwt () {
  return jwt.sign({
    uuid: this.uuid,
    apiToken: this.apiToken
  })
}
