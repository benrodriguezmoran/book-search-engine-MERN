const { User, Post, Project, Job} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// const stripe = require('stripe')('KEY');
const resolvers = {
    Query: {
      user: async (parent, args, context) => {
              //I'm not sure what we should replace a lot of this stuff with since we don't have orders or products
            const user = await User.findById(context.user.id).populate({
              path: 'User',
              populate: 'User.find',
            });
            return user;
      },
      user: async (parent, { id }, context) => {
        //I'm not sure what we should replace a lot of this stuff with since we don't have orders or products
      const user = await User.findById(context.user.id).populate({
        path: 'User',
        populate: 'User.find',
      });
      return user;
},
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
        },
      };

module.exports = resolvers;