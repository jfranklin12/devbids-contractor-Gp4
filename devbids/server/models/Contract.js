const { Schema, model } = require('mongoose');
const responseSchema = require('./Response');
const categorySchema = require('./Category');

const contractSchema = new Schema(
  {
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
    category: [categorySchema],
    response: [responseSchema],
    price: {
      type: Number,
      min: 0.99
    },
    contractDate: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

const Contract = model('Contract', contractSchema);

module.exports = Contract;
