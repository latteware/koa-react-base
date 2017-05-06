const config = require('config')

const Koa = require('koa')
const logger = require('koa-logger')
const convert = require('koa-convert')
const cors = require('koa-cors')

const routers = require('./routers')
const { errorHandler, getRequestData } = require('lib/middlewares')

const { env } = config
const app = new Koa()

// Logger
if (env !== 'test') {
  app.use(logger())
}

// Allow cors
app.use(convert(cors()))

// Error handler
app.use(convert(errorHandler))

// Get Request data
app.use(convert(getRequestData))

// api
routers(app)

module.exports = app
