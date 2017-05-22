const User = require('models/User')

module.exports = {
  method: 'get',
  path: '/',
  handler: function * () {
    // const { body } = this.request
    const { total, data } = yield User.dataTables({
      // limit: body.limit,
      // skip: body.skip,
      find: {},
      sort: '-createdAt'
    })

    this.body = {
      data,
      total
    }
  }
}
