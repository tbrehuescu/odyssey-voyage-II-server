const { AuthenticationError, ForbiddenError } = require('./utils/errors');

const resolvers = {
  Host: {
    _resolveReference: (user, { dataSources}) => {
      return dataSources.accountsAPI.getUserById(user.id);
    }
  },
  Guest: {
    _resolveReference: (user, { dataSources}) => {
      return dataSources.accountsAPI.getUserById(user.id);
    }
  }
};

module.exports = resolvers;
