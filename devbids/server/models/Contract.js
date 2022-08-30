const mongoose = require('mongoose');

const { Schema } = mongoose;

const contractSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  // price: {
  //   type: Float,
  //   min: 0.99
  // },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  contractDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;
