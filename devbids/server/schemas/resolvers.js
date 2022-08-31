const { AuthenticationError } = require('apollo-server-express');
const { Category, Contract, Response, User, Transaction, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // get user info
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

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
        const contracts = await Contract.find({ username: context.user.username });

        // const user = await User.findById(context.user._id).populate({
        //   path: 'contract',
        //   populate: 'contract'
        // });

        return contracts;
      }

      throw new AuthenticationError('Not logged in');
    },
    // get contracts by category
    category: async (parent, { categoryId }) => {
      const contracts = await Contract.find({ _id: categoryId });

      return contracts;
    },
  },

  Mutation: {
    // login in mutation
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
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
    addContract: async (parent, args, context) => {
      if (context.user) {
        const contract = new Contract({ contract });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { contracts: contract },
        });
      }

      throw new AuthenticationError('Not logged in');
    },

    // addResponse mutation

    // update user mutation
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw new AuthenticationError('Not logged in');
    },
    // update response

  },
};

module.exports = resolvers;
