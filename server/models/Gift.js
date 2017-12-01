const mongoose = require('mongoose')

const GiftSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: String, required: false },
  jammieSize: { type: String, required: true },
  address: { type: String, required: true },
  specialInstructions: { type: String, required: false },
  story: { type: String, required: false },
  image: { type: String, required: false }
})

GiftSchema.methods.loadData = function (data) {
  this.firstName = data.firstName || this.firstName
  this.lastName = data.lastName || this.lastName
  this.age = data.age || this.age
  this.jammieSize = data.jammieSize || this.jammieSize
  this.address = data.address || this.address
  this.specialInstructions = data.specialInstructions || this.specialInstructions
  this.story = data.story || this.story
  this.image = data.image || this.image
}

module.exports = mongoose.model('Gift', GiftSchema)
