const { expect } = require('chai')
const User = require('models/User')
const { clearDatabase } = require('../utils')

require('co-mocha')

describe('user', () => {
  beforeEach(function * () {
    yield clearDatabase()
  })

  describe('auth', () => {
    const email = 'user@app.com'
    const password = '1234'

    it('should return a error 401', function * () {
      yield User.create({ email, password })
      try {
        yield User.auth(email, '4321')
      } catch (err) {
        expect(err.statusCode).equal(401)
      }
    })

    it('should auth an user with correct credentials', function * () {
      yield User.create({ email, password })
      const user = yield User.auth(email, password)
      expect(user.email).equal(email)
    })
  })
})
