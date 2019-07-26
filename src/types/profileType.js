const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean
} = graphql

exports.profileType = new GraphQLObjectType({
  name: 'profile',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    nome: {
      type: GraphQLString
    },
    permissoes: {
      type: new GraphQLList(permissao),
      resolve(parent, args) {
        return null;
      }
    }
  })
});

const permissao = new GraphQLObjectType({
  name: 'permissao',
  fields: () => ({
    recurso: {
      type: recursoType
    },
    visualizar: {
      type: GraphQLBoolean
    },
    inserir: {
      type: GraphQLBoolean
    },
    editar: {
      type: GraphQLBoolean
    },
    deletar: {
      type: GraphQLBoolean
    }
  })
});

const recursoType = new GraphQLObjectType({
  name: 'recurso',
  fields: () => ({
    recurso: {
      type: GraphQLString
    }
  })
});