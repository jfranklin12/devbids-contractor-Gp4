const { Schema, model } = require('mongoose')

const transactionSchema = new Schema({
  contractUser: {
    type: Number,
    ref: 'Contract',
    required: true
  },
  responseUser: {
    type: Number,
    ref: 'Response',
    required: true
  },
  contractId: {
    type: Number,
    ref: 'Response',
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  price: {
    type: Decimal128,
    min: 0.99
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
})

const Transaction = model('Transaction', transactionSchema)

module.exports = Transaction
