const config = require('config')
const jwt = require('jsonwebtoken')

module.exports = {
  sign: function (data) {
    console.log('Data =>', data, config.jwt.secret, config.jwt.expiration)
    const token = jwt.sign(data, config.jwt.secret, { expiresIn: config.jwt.expiration })
    console.log('Token =>', token)

    return token
  },

  verify: function (token) {
    return new Promise(function (resolve, reject) {
      jwt.verify(token, config.jwt.secret, function (err, data) {
        if (err) { return reject(err) }

        resolve(data)
      })
    })
  }
}
