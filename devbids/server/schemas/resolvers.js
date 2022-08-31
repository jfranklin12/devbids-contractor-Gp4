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
  // Mutation: {
  //   createMatchup: async (parent, args) => {
  //     const matchup = await Matchup.create(args);
  //     return matchup;
  //   },
  //   createVote: async (parent, { _id, techNum }) => {
  //     const vote = await Matchup.findOneAndUpdate(
  //       { _id },
  //       { $inc: { [`tech${techNum}_votes`]: 1 } },
  //       { new: true }
  //     );
  //     return vote;
  //   },
  // },
};

module.exports = resolvers;
