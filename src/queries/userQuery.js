const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;
const userType = require('../types/userType').userType;
const {
    usersList
} = require('../../test/helpers/users');

const getUser = {
    type: userType,
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
