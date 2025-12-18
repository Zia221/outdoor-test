const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
  red: {
    type: Number,
    default: 0
  },
  blue: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Count', countSchema);