require('co-mocha')
require('co-supertest')

const { expect } = require('chai')
const http = require('http')
const request = require('supertest')
const { clearDatabase, authUser } = require('../utils')
const app = require('app/server/app')

describe('/users', () => {
  const agent = request.agent(http.createServer(app.callback()))

  before(function * () {
    yield clearDatabase()
    yield authUser(agent)
  })

  describe('post', (done) => {
    it('should retuna list', function * () {
      const { body } = yield agent.get('/api/users')
      expect(body.total).equal(1)
      expect(body.users.length).equal(1)
    })
  })
})
