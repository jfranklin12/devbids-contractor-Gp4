const mongoose = require('mongoose');

const { Schema } = mongoose;

const requestSchema = new Schema({
  purchaseDate: {
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

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
