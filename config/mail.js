module.exports = {
  mailchimpKey: process.env.EMAIL_MANDRILL_KEY,
  send: process.env.EMAIL_SEND === 'true',
  sender: {
    email: 'koa-react-base@latteware.io',
    name: 'Koa base app'
  }
}
