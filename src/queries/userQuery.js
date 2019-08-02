const graphql = require('graphql');
const {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql;
const userType = require('../types/userType').userType;
const usuarioService = require('./../services/usuarioService');

const getUser = {
    type: userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        }
    },
    resolve(parent, args) {
        return usuarioService.getUserById(args.id);
    }
};

const allUsers = {
    type: new GraphQLList(userType),
    resolve() {
        return usuarioService.getUsers();
    }
};

module.exports = {
    getUser,
    allUsers
};