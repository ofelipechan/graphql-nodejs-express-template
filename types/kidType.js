const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLObjectType
} = graphql;

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
      }
    })
  });