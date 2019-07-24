const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const UserType = require('../types/user');
// const UserModel = require('../../models/user');

exports.add = {
    type: UserType.userType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve() {
        const uModel = {};
        const newUser = uModel.save();
        if (!newUser) {
            throw new Error('Error');
        }
        return newUser;
    }
};

exports.remove = {
    type: UserType.userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve() {
        const removeduser = undefined;
        if (!removeduser) {
            throw new Error('Error');
        }
        return removeduser;
    }
};


exports.update = {
    type: UserType.userType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve() {
        return {};
    }
};
