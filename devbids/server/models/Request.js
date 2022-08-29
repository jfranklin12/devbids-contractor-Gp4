const { Schema, model} = require('mongoose');



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

const Request = model('Request', requestSchema);

module.exports = Request;
