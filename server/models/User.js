const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new mongoose.Schema({
  local: {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    address: String,
    phone: String
  }
})

UserSchema.methods.setMetaDates = function () {
  const newDate = new Date()
  this.created = this.created || newDate
  this.modified = newDate
}
UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}
UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password)
}

UserSchema.methods.loadData = function (data) {
  this.local.firstName = data.firstName || this.local.firstName
  this.local.lastName = data.lastName || this.local.lastName
  this.local.address = data.address || this.local.address
  this.local.phone = data.phone || this.local.phone
}

module.exports = mongoose.model('User', UserSchema)
