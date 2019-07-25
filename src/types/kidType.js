const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} = graphql
const {
  usersList
} = require('../../test/helpers/users');
const userType = require('./userType');

exports.kidType = new GraphQLObjectType({
  name: 'kid',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    genre: {
      type: GraphQLString
    },
    parents: {
      type: new GraphQLList(userType.userType),
      resolve(parent, args) {
        console.log(parent);
        return usersList.filter(a => a.id == parent.fatherId || a.id == parent.motherId);
      }
    }
  })
});