const {Schema, model} = require('mongoose');

const responseSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  contractId: {
    type: Int,
    ref: 'Contract',
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
  responseDate: {
    type: Date,
    default: Date.now
  },
});


const Response = model('Response', responseSchema);


module.exports = Response;
