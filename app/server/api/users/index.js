const isAuthenticated = require('../../middlewares/isAuthenticated')

module.exports = {
  routes: require('es6-requireindex')(__dirname),
  prefix: '/users',
  middlewares: [isAuthenticated]
}
