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
    // get user info... WORKING
    user: async (parent, args, context) => {
      if (context.user) {
        
        const user = await User.findById(context.user._id).select('-__v -password');

        return user;
      }
      throw new AuthenticationError("Log in unsuccessful!");
    },
    // contracts all contracts... WORKING
    contracts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Contract.find(params);
    },
    // user contracts... WORKING
    userContracts: async (parent, args, context) => {
      if (context.user) {
        const contracts = await Contract.find({
          username: context.user.username,
        });

        return contracts;
      }

      throw new AuthenticationError("Not logged in");
    },
    // get contracts by category.... NOT WORKING UNABLE TO GET CATEGORY ON CONTRACT
    category: async (parent, { category }) => {
      const contracts = await Contract.find({ category });

      return contracts;
    },
  },

  Mutation: {
    // login mutation... WORKING
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
    // add user mutation... WORKING
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // addContract mutation... WORKING, unable to get category name to generate
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

    // addResponse mutation... WORKING
    addResponse: async (parent, { contractId, responseDescription, price, responseDate }, context) => {
      if (context.user) {
      return Contract.findOneAndUpdate(
        { _id: contractId },
        {
          $addToSet: {
            responses: { responseDescription, price, responseDate, responseAuthor: context.user.username },
          },
        },
        {
          new: true,
        }
      );
    }
    throw new AuthenticationError('You need to be logged in!');
  },

    // update user mutation... UNKNOWN
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    // delete contract.. working bwith validation
    deleteContract: async (parent, { contractId }, context) => {
      if (context.user) {
        const contract = await Contract.findOneAndDelete({
          _id: contractId,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { contracts: contract._id } }
        );

        return contract;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // delete response...
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
