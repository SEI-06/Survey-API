const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  choice1: {
    type: String,
    required: true
  },
  choice2: {
    type: String,
    required: true
  },
  choice3: {
    type: String,
    required: true
  },
  choice4: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Question', questionSchema)
