const connection = require("../config/connection");

const { User } = require("../models"); //need to add in the other models here eventually that we want to test

const userData = require("../seeds/user.json");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});

  await User.collection.insertMany(userData);
});
