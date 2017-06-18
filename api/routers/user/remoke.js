module.exports = {
  method: 'delete',
  path: '/',
  handler: async function (ctx) {
    ctx.body = {
      success: true
    }
  }
}
