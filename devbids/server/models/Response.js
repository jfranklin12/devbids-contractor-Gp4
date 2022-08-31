const { Schema, Types } = require("mongoose");

const responseSchema = new Schema(
  {
    responseId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    contractId: {
      type: Number,
      ref: "Contract",
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    price: {
      type: Number,
      min: 0.99,
    },
    responseDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

module.exports = responseSchema;
