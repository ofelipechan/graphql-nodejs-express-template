const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID
} = graphql;
const queryType = require('../queries/userQuery').queryType;
const mutation = require('../mutations/index');
const _ = require('lodash');

const usersList = [{
    id: '1',
    name: 'Felipe',
    genre: 'M'
  },
  {
    id: '2',
    name: 'Sol',
    genre: 'F'
  },
  {
    id: '3',
    name: 'Danilo',
    genre: 'M'
  },
  {
    id: '4',
    name: 'Junin',
    genre: 'M'
  },
];

const childs = [
  {
    id: '1',
    name: 'marcos',
    genre: 'M'
  },
  {
    id: '2',
    name: 'rafaela',
    genre: 'F'
  },
  {
    id: '3',
    name: 'lucas',
    genre: 'M'
  },
  {
    id: '4',
    name: 'enzo',
    genre: 'M'
  },
];

const user = new GraphQLObjectType({
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
    }
  })
});

const kid = new GraphQLObjectType({
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

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    employee: {
      type: user,
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
    },
    kids: {
      type: kid,
      args: {
        id: {
          type: GraphQLID
        },
        name: {
          type: GraphQLString
        }
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