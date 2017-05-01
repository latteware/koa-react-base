const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const { extend } = require('lodash')
const { v4 } = require('uuid')
const bcrypt = require('bcrypt')
const statics = require('./statics')
const methods = require('./methods')

const SALT_WORK_FACTOR = process.env.SALT_WORK_FACTOR

const userSchema = new Schema({
  name: { type: String },
  password: { type: String },
  email: { type: String, required: true, unique: true, trim: true },
  validEmail: {type: Boolean, default: false},

  screenName: { type: String, unique: true },
  displayName: { type: String },

  resetPasswordToken: { type: String, default: v4 },

  uuid: { type: String, default: v4 },
  apiToken: { type: String, default: v4 }
})

userSchema.pre('save', function (next) {
  if (this.isNew) {
    this.id = this._id.toString()
  }

  next()
})

userSchema.pre('save', function (next) {
  if (!this.password || !this.isModified('password')) return next()

  try {
    const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
    this.password = bcrypt.hashSync(this.password, salt)
  } catch (err) {
    return next(err)
  }

  return next()
})

extend(userSchema.statics, statics)
extend(userSchema.methods, methods)

module.exports = mongoose.model('User', userSchema)
