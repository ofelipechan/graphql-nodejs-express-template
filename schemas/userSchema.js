const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
} = graphql;
// const queryType = require('../queries/userQuery').queryType;
// const mutation = require('../mutations/index');
const _ = require('lodash');
const { usersList, kids } = require('./../test/helpers/users');
const { userType, kidType } = require('./../types/index');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    employee: {
      type: userType,
      args: {
        id: {
          type: GraphQLID,
        },
        name: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {
        return usersList.find(a => a.id === args.id);
      }
    }
    ,kids: {
      type: kidType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return kids.find(a => a.id === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

// exports.userSchema = new GraphQLSchema({
//   query: queryType,
//   mutation: new GraphQLObjectType({
//     name: 'Mutation',
//     fields: mutation
//   })
// });