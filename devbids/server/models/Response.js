const { Schema, model } = require("mongoose");

const responseSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Float,
    required: true,
    min: 0.99,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  responseDate: {
    type: Date,
    default: Date.now,
  },
});

const Response = model("Response", responseSchema);

module.exports = Response;
