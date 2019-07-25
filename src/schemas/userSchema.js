const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;
const { userQuery } = require('../queries/index');
const userMutation = require('./../mutations/userMutation');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: userQuery.getUser,
    users: userQuery.getUsers,
    // kid: {
    //   type: kidType,
    //   args: {
    //     id: {
    //       type: GraphQLID
    //     }
    //   },
    //   resolve(parent, args) {
    //     return kids.find(a => a.id === args.id);
    //   }
    // },
    // kids: {
    //   type: new GraphQLList(kidType),
    //   resolve(parent, args) {
    //     return kidsList;
    //   }
    // }
  }
});

// const mutation = new GraphQLObjectType({
//   name: 'userMutation',
//   fields: {
//     addUser: {
      
//     }
//   }
// })

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: userMutation
});
