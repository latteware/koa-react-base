require('./config')
require('lib/databases/mongo')

const { apiPort, appPort } = require('config/server')
const app = require('./app/server')
const api = require('./api')

api.listen(apiPort)
console.log(`App started on port ${apiPort}`)

app.listen(appPort)
console.log(`Api started on port ${appPort}`)
