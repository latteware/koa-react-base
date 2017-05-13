require('../../config')
require('lib/databases/mongo')

const { adminPort } = require('config/server')
const admin = require('./')

admin.listen(adminPort)
console.log(`App started on port ${adminPort}`)
