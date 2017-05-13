// node tasks/add-user --email archr@app.com --password foobar --screenName Archer
// node tasks/add-user --email admin@app.com --password foobar --screenName admin --isAdmin true
require('../config')
require('lib/databases/mongo')
const _ = require('lodash')

const { User } = require('models')
const Task = require('lib/task')

const task = new Task(function * (argv) {
  if (!argv.password || !argv.email || !argv.screenName) {
    throw new Error('screenName, email and password are required')
  }

  argv.password = _.toString(argv.password)

  const user = new User({
    email: argv.email,
    password: argv.password,
    screenName: argv.screenName,
    isAdmin: argv.isAdmin === 'true',
    validEmail: true
  })

  yield user.save()

  return user
})

if (require.main === module) {
  task.setCliHandlers()
  task.run()
} else {
  module.exports = task
}
