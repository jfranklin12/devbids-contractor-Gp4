const { Schema, model } = require('mongoose')

const transactionSchema = new Schema({
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  transactionDate: {
    // This was changed from Date to String for testing
    type: String,
    default: '2',
  },
})

const Transaction = model('Transaction', transactionSchema)

module.exports = Transaction
