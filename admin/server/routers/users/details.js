const User = require('models/User')

module.exports = {
  method: 'get',
  path: '/:uuid',
  handler: function * () {
    const uuid = this.params.uuid
    const user = yield User.findOne({uuid})

    if (!user) { this.throw(404, 'Not found') }

    this.body = user
  }
}
