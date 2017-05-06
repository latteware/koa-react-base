require('co-mocha')
require('co-supertest')

const { expect } = require('chai')
const http = require('http')
const request = require('supertest')
const { clearDatabase, authUser } = require('../utils')
const api = require('api/')

describe('/users', () => {
  const agent = request.agent(http.createServer(api.callback()))
  var jwt

  before(function * () {
    yield clearDatabase()
    jwt = yield authUser(agent)
  })

  describe('post', (done) => {
    it('should retuna list', function * () {
      const { body } = yield agent.get('/api/users')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${jwt}`)
      expect(body.total).equal(1)
      expect(body.users.length).equal(1)
    })
  })
})
