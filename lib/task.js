const parseArgs = require('minimist')
const co = require('co')

const Task = class Task {
  constructor (fn) {
    this._fn = fn
  }

  run (argv) {
    const wrap = co.wrap(this._fn)
    argv = argv || parseArgs(process.argv.slice(2))

    var q = wrap(argv)

    if (this._cli) {
      q.then(data => {
        console.log('Success =>', data)
        process.nextTick(() => process.exit())
      }).catch(err => {
        console.error('=>', err)
        process.nextTick(() => process.exit(1))
      })
    }

    return q
  }

  setCliHandlers () {
    this._cli = true
  }
}

module.exports = Task
