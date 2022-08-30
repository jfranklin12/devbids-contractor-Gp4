const {Schema, model} = require('mongoose');


<<<<<<< HEAD
const responseSchema = new Schema({
  username: {
=======

const responseSchema = new Schema({
  name: {
>>>>>>> 519f41ac381ca287dd896d83b8046734e31556ba
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Float,
    required: true,
    min: 0.99
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  responseDate: {
    type: Date,
    default: Date.now
  },
});

<<<<<<< HEAD
const Response = mongoose.model('Response', responseSchema);
=======
const Response = model('Response', responseSchema);
>>>>>>> 519f41ac381ca287dd896d83b8046734e31556ba

module.exports = Response;
