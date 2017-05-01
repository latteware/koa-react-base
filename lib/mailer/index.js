'use strict'
const mandrill = require('mandrill-api/mandrill')
const Bluebird = require('bluebird')
const nunjucks = require('nunjucks')
const inlineCss = require('inline-css')
const path = require('path')

const config = require('config/mail')

const render = function (template, data) {
  return new Promise(function (resolve, reject) {
    nunjucks.render(template, data, function (err, res) {
      if (err) { return reject(err) }

      resolve(res)
    })
  })
}

const inline = function (html) {
  // Load a css file
  return inlineCss(html, {url: 'file://'})
}

if (!config.send) {
  console.warn('Emails will not be sent!!')
}

const client = new mandrill.Mandrill(config.mailchimpKey)

client.sendEmail = function (conf) {
  var q = new Bluebird(function (resolve, reject) {
    var message = {
      from_email: conf.sender.email,
      from_name: conf.sender.name
    }

    if (!config.send) {
      console.log(`Email not send, body => \n ${conf.body} \n`)
      return resolve()
    }

    message.html = conf.body
    message.subject = conf.title
    message.to = [{
      email: conf.recipient.email,
      name: conf.recipient.name
    }]

    if (!config.send) {
      console.log(`Email not send, body => \n ${conf.body} \n`)
      return resolve()
    }

    client.messages.send({
      'message': message,
      'async': false,
      'ip_pool': 'Main pool'
    }, function (result) {
      resolve(result)
    }, function (err) {
      reject(err)
    })
  })

  return q
}

module.exports = class Mail {
  constructor (template) {
    this.template = template
  }

  * format (data) {
    const template = path.join(__dirname, 'templates', this.template + '.html')
    const body = yield render(template, data)
    this.body = yield inline(body)
  }

  * send (options) {
    options = options || {}
    if (!options.sender) { options.sender = config.sender }

    yield client.sendEmail({
      body: this.body,
      title: options.title,
      recipient: options.recipient,
      sender: options.sender
    })
  }
}
