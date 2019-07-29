const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLID
} = graphql

exports.addPerfilType = new GraphQLInputObjectType({
  name: 'addPerfilType',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    nome: {
      type: GraphQLString
    }
  })
});

exports.profileType = new GraphQLObjectType({
  name: 'perfil',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    nome: {
      type: GraphQLString
    },
    permissoes: {
      type: new GraphQLList(permissao)
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
    nome: {
      type: GraphQLString
    },
    frn: {
      type: GraphQLString
    }
  })
});