const isAdmin = require('lib/middlewares/isAdmin')

module.exports = {
  routes: require('es6-requireindex')(__dirname),
  prefix: '/api/users',
  middlewares: [isAdmin]
}
