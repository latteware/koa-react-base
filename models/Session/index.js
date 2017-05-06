const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const { extend } = require('lodash')
const { v4 } = require('uuid')
const statics = require('./statics')
const methods = require('./methods')

const sessionSchema = new Schema({
  createdAt: { type: Date, default: Date.now },

  uuid: { type: String, default: v4 },
  apiToken: { type: String, default: v4 },

  user: {type: Schema.Types.ObjectId, ref: 'User'}
})

extend(sessionSchema.statics, statics)
extend(sessionSchema.methods, methods)

module.exports = mongoose.model('Session', sessionSchema)
