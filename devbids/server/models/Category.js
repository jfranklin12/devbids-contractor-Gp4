const { Schema, Types } = require('mongoose');



const categorySchema = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    name: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);


module.exports = categorySchema;
