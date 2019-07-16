const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  rpm: {
    type: String,
    required: true,
    enum: ['33 1/3', '45', '78']
  },
  size: {
    type: Number,
    required: true,
    enum: [7, 10, 12]
  }
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
