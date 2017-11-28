const mongoose = require('mongoose')

const GiftSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: String, required: true },
  jammieSize: { type: String, required: true },
  street: { type: String, required: true },
  mailingState: { type: String, required: true },
  zipCode: { type: String, required: true },
  specialInstructions: { type: String, required: true },
  story: { type: String, required: true },
  image: { type: String, required: true }
})

DrinkSchema.methods.loadData = function (data) {
  this.firstName = data.firstName || this.firstName
  this.lastName = data.lastName || this.lastName
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
