const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql;
const userType = require('../types/userType').userType;
const usersMock = require('../../test/helpers/usersMock');

const getUser = {
    type: userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
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
        }
    },
    resolve(parent, args) {
        return usersMock.usersMockList.find(a => a.id === args.id);
    }
};

const allUsers = {
    type: new GraphQLList(userType),
    resolve(parent, args) {
        return usersMock.usersMockList;
    }
};

module.exports = {
    getUser,
    allUsers
};