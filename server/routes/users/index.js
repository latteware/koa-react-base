const createRoute = require('../createRoute')
const isAuthenticated = require('../../middlewares/isAuthenticated')

module.exports = createRoute({
  routes: require('es6-requireindex')(__dirname),
  prefix: '/api/users',
  middlewares: [isAuthenticated]
})
