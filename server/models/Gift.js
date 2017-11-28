const mongoose = require('mongoose')

const GiftSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: String, required: false },
  jammieSize: { type: String, required: true },
  street: { type: String, required: true },
  mailingState: { type: String, required: true },
  zipCode: { type: String, required: true },
  specialInstructions: { type: String, required: false },
  story: { type: String, required: false },
  image: { type: String, required: false },
  nickName: {type: String, required: false}
})

GiftSchema.methods.loadData = function (data) {
  this.firstName = data.firstName || this.firstName
  this.lastName = data.lastName || this.lastName
  this.nickName = data.nickName || this.nickName
  this.age = data.age || this.age
  this.jammieSize = data.jammieSize || this.jammieSize
  this.street = data.street || this.street
  this.mailingState = data.mailingState || this.mailingState
  this.zipCode = data.zipCode || this.zipCode
  this.specialInstructions = data.specialInstructions || this.specialInstructions
  this.story = data.story || this.story
  this.image = data.image || this.image
}

module.exports = mongoose.model('Gift', GiftSchema)
