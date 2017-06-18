module.exports = {
  method: 'get',
  path: '/me',
  handler: async function (ctx) {
    if (ctx.state.user) {
      const user = await ctx.state.user.toPublic()
      ctx.body = {
        loggedIn: true,
        user
      }
    } else {
      ctx.body = {
        loggedIn: false
      }
    }
  }
}
