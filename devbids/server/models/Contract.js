const mongoose = require('mongoose');

const { Schema } = mongoose;

const contractSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  price: {
    type: Float,
    min: 0.99
  },
  contractDate: {
    type: Date,
    default: Date.now
  }
});

const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;
