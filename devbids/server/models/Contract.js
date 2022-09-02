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
    category: {
      type: String,
      required: true,
      trim: true
    },
    responses: [
      {
        responseAuthor: {
          type: String,
          required: true,
        },
        responseDescription: {
          type: String,
          required: true,
        },
        price: {
          type: String,
        },
        responseDate: {
          type: Date,
          default: Date.now,
        },
      }
    ],
    price: {
      type: String,
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
