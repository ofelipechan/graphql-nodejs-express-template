const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql;
const userType = require('../types/userType').userType;
const profileType = require('../types/profileType').profileType;
const {
    usersList
} = require('../../test/helpers/users');

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
        },
        // perfis: {
        //     type: new GraphQLList(profileType)
        // }

    },
    resolve(parent, args) {
        return usersList.find(a => a.id === args.id);
    }
};

const getUsers = {
    type: new GraphQLList(userType),
    resolve(parent, args) {
        return usersList;
    }
};

module.exports = {
    getUser,
    getUsers
};