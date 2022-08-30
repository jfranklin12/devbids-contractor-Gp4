const { Category, Contract, Response, User, Transaction, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }
      throw new AuthenticationError("Log in unsuccessful!");
    },
    // contracts
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
