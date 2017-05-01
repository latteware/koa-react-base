const requireindex = require('es6-requireindex')
const path = require('path')
const debug = require('debug')
const convert = require('koa-convert')
const router = require('koa-joi-router')
const { forEach } = require('lodash')

const resouces = requireindex(path.join(__dirname, 'routers'), { recursive: false })

module.exports = function api (app) {
  forEach(resouces, ({ prefix, routes, middlewares }) => {
    const pfix = `/api${prefix}`
    const rtr = router()
    rtr.prefix(pfix)

    debug('api')(`Adding resource ${pfix}`)
    forEach(middlewares, mdw => {
      rtr.use(mdw)
    })

    forEach(routes, route => {
      debug('api')(`Added new route [${route.method}]${pfix}${route.path}`)
      rtr.route(route)
    })

    app.use(convert(rtr.middleware()))
  })
}
