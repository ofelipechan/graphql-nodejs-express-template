const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
} = graphql;
const UserType = require('../types/userType');

const add = {
    type: UserType.userType,
    args: UserType.userInputType,
    resolve() {
        return { id: '1234'};
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
            nome: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
        nome: {
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