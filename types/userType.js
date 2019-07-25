const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} = graphql
const { kids } = require('../test/helpers/users');
const { kidType } = require('./kidType');

exports.userType = new GraphQLObjectType({
  name: 'user',
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
    kids: {
      type: new GraphQLList(kidType),
      resolve(parent, args) {
        console.log(parent);
        return kids.filter(a => a.fatherId == parent.id || a.motherId == parent.id);
      }
    }
  })
});

// exports.userType = new GraphQLObjectType({
//   name: 'user',
//   fields: function () {
//     return {
//       id: {
//         type: new GraphQLNonNull(GraphQLID)
//       },
//       name: {
//         type: GraphQLString
//       }
//     };
//   }  
// }); 
