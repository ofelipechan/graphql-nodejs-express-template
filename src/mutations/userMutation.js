const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull
} = graphql;
const UserType = require('../types/userType');
// const UserModel = require('../../models/user');

const add = {
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

const remove = {
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


const update = {
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

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        add,
        remove,
        update
    }
});