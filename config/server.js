
module.exports = {
  appPort: parseInt(process.env.APP_PORT) || 5000,
  appHost: process.env.APP_HOST || 'http://localhost:5000',
  apiPort: parseInt(process.env.API_PORT) || 3000,
  apiHost: process.env.API_HOST || 'http://localhost:3000',
  static: process.env.WEBPACK_PUBLIC_PATH
}
