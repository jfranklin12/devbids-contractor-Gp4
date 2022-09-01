const { AuthenticationError } = require("apollo-server-express");
const {
  Category,
  Contract,
  Response,
  User,
  Transaction,
  Comment,
} = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // get user info
    user: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        
        const user = await User.findById(context.user._id).select('-__v -password');

        return user;
      }
      throw new AuthenticationError("Log in unsuccessful!");
    },
    // contracts all contracts
    contracts: async () => {
      // can sort by adding .sort({ createdAt: -1 }) and add to typeDefs
      return await Contract.find();
    },
    // user contracts
    userContracts: async (parent, args, context) => {
      if (context.user) {
        const contracts = await Contract.find({
          username: context.user.username,
        });

        // const user = await User.findById(context.user._id).populate({
        //   path: 'contract',
        //   populate: 'contract'
        // });

        return contracts;
      }

      throw new AuthenticationError("Not logged in");
    },
    // get contracts by category
    category: async (parent, { categoryId }) => {
      const contracts = await Contract.find({ _id: categoryId });

      return contracts;
    },
  },

  Mutation: {
    // login mutation
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect email or password");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect email password");
      }

      const token = signToken(user);

      return { token, user };
    },
    // add user mutation
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // addContract mutation
    addContract: async (parent, { username, title, description, category, price, contractDate }, context) => {
      if (context.user) {
        const contract = await Contract.create({
          username,
          title,
          description,
          category,
          price,
          contractDate,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { contracts: contract._id } }
        );

        return contract;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // addResponse mutation
    addResponse: async (parent, { contractId, description }) => {
      return Thought.findOneAndUpdate(
        { _id: contractId },
        {
          $addToSet: { responses: { description } },
        },
        {
          new: true,
        }
      );
    },

    // update user mutation
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    // delete contract
    deleteContract: async (parent, { contractId }, context) => {
      if (context.user) {
        const contract = await Contract.findOneAndDelete({
          _id: contractId,
          contractAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { contracts: contract._id } }
        );

        return contract;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // delete response
    deleteResponse: async (parent, { contractId, responseId }, context) => {
      if (context.user) {
        return Contract.findOneAndUpdate(
          { _id: contractId },
          {
            $pull: {
              response: {
                _id: responseId,
                responseAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
