const connection = require("../config/connection");

const { User, Contract } = require("../models"); //need to add in the other models here eventually that we want to test

const userData = require("../seeds/user.json");
const contractData = require('./contract.json')

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});

  await User.create(userData);

  await Contract.deleteMany({})
  await Contract.create(contractData)

  console.log('All done')
  process.exit(0)
});
