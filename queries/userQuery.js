const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLList = require('graphql').GraphQLList;
const userType = require('../types/user').userType;

const getUser = new GraphQLObjectType({
    name: 'Query',
    fields: {
        users: {
            type: new GraphQLList(userType),
            resolve: function () {
                const users = {};
                if (!users) {
                    throw new Error('Error');
                }
                return users;
            }
        }
    }
});

module.exports = {
    getUser
};