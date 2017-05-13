const config = require('config')

const Koa = require('koa')
const logger = require('koa-logger')
const mount = require('koa-mount')
const serve = require('koa-static')
const convert = require('koa-convert')
const views = require('koa-nunjucks-next')
const routers = require('./routers')
const { render, errorHandler, getRequestData } = require('lib/middlewares')

const { webpack, server, env } = config
const app = new Koa()

// View templates
app.use(views(`${__dirname}/views`, {
  noCache: true
}))

// Static files
app.use(mount(server.static, serve(webpack.outputPath + '/admin', { defer: false })))

// Logger
if (env !== 'test') {
  app.use(logger())
}

// Error handler
app.use(convert(errorHandler))

// Get Request data
app.use(convert(getRequestData))

// routers
routers(app)

// frontend
app.use(convert(render))

module.exports = app
