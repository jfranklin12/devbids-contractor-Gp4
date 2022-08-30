const { Schema, model } = require('mongoose')

const transactionSchema = new Schema({
  contractUser: {
    type: Int,
    ref: 'Contract',
    required: true
  },
  responseUser: {
    type: Int,
    ref: 'Response',
    required: true
  },
  contractId: {
    type: Int,
    ref: 'Response',
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
  transactionDate: {
    type: Date,
    default: Date.now,
  },
})

const Transaction = model('Transaction', transactionSchema)

module.exports = Transaction
