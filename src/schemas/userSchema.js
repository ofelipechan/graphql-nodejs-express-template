const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;
const { userQuery } = require('../queries/index');
const { userMutation } = require('./../mutations/index');

const RootQuery = new GraphQLObjectType({
  name: 'UserQuery',
  fields: {
    user: userQuery.getUser,
    allUsers: userQuery.allUsers,
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: userMutation
});
