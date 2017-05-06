// node tasks/add-user --email archr@app.com --password foobar
require('../config')
require('lib/databases/mongo')

const { User } = require('models')
const Task = require('lib/task')

const task = new Task(function * (argv) {
  console.log('=>', argv)

  if (!argv.password || !argv.email) {
    throw new Error('email and password are required')
  }

  const user = new User({
    email: argv.email,
    password: argv.password
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
