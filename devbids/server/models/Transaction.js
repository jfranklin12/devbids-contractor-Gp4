const mongoose = require('mongoose');

const { Schema } = mongoose;

const transactionSchema = new Schema({
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    transactionDate: {
      type: Date,
      default: Date.now
    },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
