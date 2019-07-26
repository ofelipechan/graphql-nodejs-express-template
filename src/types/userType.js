const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} = graphql;
const profileType = require('./profileType').profileType;

exports.userType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    nome: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    usuario: {
      type: GraphQLString
    },
    documento: {
      type: GraphQLString
    },
    documentoProprietario: {
      type: GraphQLString
    },
    perfis: {
      type: new GraphQLList(profileType)
    }
    // perfis: {
    //   type: new GraphQLList()
    // }
    // kids: {
    //   type: new GraphQLList(kidType.kidType),
    //   resolve(parent, args) {
    //     return kidsList.filter(a => a.fatherId == parent.id || a.motherId == parent.id);
    //   }
    // }
  })
});
