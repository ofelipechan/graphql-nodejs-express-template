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
    users: userQuery.getUsers,
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: userMutation
});
