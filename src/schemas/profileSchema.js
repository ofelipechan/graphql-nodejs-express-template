const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;
const {
  userType
} = require('../types/index');

const RootQuery = new GraphQLObjectType({
  name: 'ProfileQueryType',
  fields: {
    employee: {
      type: userType,
      args: {
        id: {
          type: GraphQLID,
        },
        nome: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {
        return usersList.find(a => a.id === args.id);
      }
    },
    employees: {
      type: new GraphQLList(userType),
      resolve(parent, args) {
        return usersList;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
