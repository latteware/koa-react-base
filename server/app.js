const Koa = require('koa')
const logger = require('koa-logger')
const mount = require('koa-mount')
const serve = require('koa-static')
const convert = require('koa-convert')
const session = require('koa-generic-session')
const flash = require('koa-flash')
const redisStore = require('koa-redis')
const nunjucks = require('nunjucks')
const views = require('yet-another-nunjucks-koa-render')
const { render, errorHandler } = require('./middlewares')
const config = require('../config')

const { webpack, server, env } = config
const app = new Koa()

// View templates
app.use(views(nunjucks.configure(`${__dirname}/views`, { noCache: true }), { ext: '.html' }))

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

// Routes
app.use(require('./routes/public'))
app.use(require('./routes/protected'))
app.use(require('./routes/users'))

// frontend
app.use(convert(render))

module.exports = app
