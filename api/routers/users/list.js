const User = require('models/User')

module.exports = {
  method: 'get',
  path: '/',
  handler: async function (ctx) {
    ctx.assert(ctx.state.user, 403)

    const users = await User.find()
    const total = await User.count()

    ctx.body = {
      users: users.map(user => user.format()),
      total
    }
  }
}
