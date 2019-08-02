const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
} = graphql;
const profileType = require('./profileType');

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
      type: new GraphQLList(profileType.profileType)
    }
  })
});

exports.userInputType = {
    nome: {
      type: new GraphQLNonNull(GraphQLString)
    },
    dataNascimento: {
      type: GraphQLString
    },
    emailPrimario: {
      type: new GraphQLNonNull(GraphQLString)
    },
    usuario: {
      type: GraphQLString
    },
    senha: {
      type: new GraphQLNonNull(GraphQLString)
    },
    documento: {
      type: new GraphQLNonNull(GraphQLString)
    },
    documentoProprietario: {
      type: GraphQLString
    },
    perfis: {
      type: new GraphQLList(profileType.addPerfilType)
    }
};