const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  cellphone: {
    type: Number,
    required: true
  },
  hobbies: {
    type: Object,
    required: true,

    hobbie1: {
      type: String,
      required: true
    }
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('user', UserSchema)
