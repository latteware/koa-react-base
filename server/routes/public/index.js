const createRoute = require('../createRoute')

module.exports = createRoute({
  routes: require('es6-requireindex')(__dirname),
  prefix: '/'
})
