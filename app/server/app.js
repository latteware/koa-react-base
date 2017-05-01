const config = require('config')

const Koa = require('koa')
const logger = require('koa-logger')
const mount = require('koa-mount')
const serve = require('koa-static')
const convert = require('koa-convert')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const views = require('koa-nunjucks-next')
const flash = require('koa-flash')
const api = require('./api')
const routers = require('./routers')
const { render, errorHandler, getRequestData } = require('./middlewares')

const { webpack, server, env } = config
const app = new Koa()

// View templates
app.use(views(`${__dirname}/views`, {
  noCache: true
}))

// Static files
app.use(mount(server.static, serve(webpack.outputPath, { defer: false })))

// Session and flash config
app.keys = ['keys', 'keykeys']
app.use(convert(session({
  store: redisStore(),
  cookie: {
    maxAge: 14 * 24 * 60 * 60 * 1000 // 14 days in ms
  }
})))
app.use(convert(flash()))

// Logger
if (env !== 'test') {
  app.use(logger())
}

// Error handler
app.use(convert(errorHandler))

// Get Request data
app.use(convert(getRequestData))

// api
api(app)

// routers
routers(app)

// frontend
app.use(convert(render))

module.exports = app
