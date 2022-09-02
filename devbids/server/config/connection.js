const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://devbidsuser:n6Z6XsO9gIxTQu0U@devbids.xoqt7ba.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
