const convert = require('koa-convert')
const router = require('koa-joi-router')
const { forEach } = require('lodash')

module.exports = function createRoute ({ prefix, routes, middlewares }) {
  const rtr = router()
  rtr.prefix(prefix)

  forEach(middlewares, mdw => {
    rtr.use(mdw)
  })

  forEach(routes, route => {
    rtr.route(route)
  })

  return convert(rtr.middleware())
}
