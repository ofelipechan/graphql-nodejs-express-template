const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
} = graphql;
const UserType = require('../types/userType');

const add = {
    type: UserType.userType,
    args: {
        nome: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        }
    },
    resolve(parent, args) {
        let userModel = {
            nome: args.nome,
            genero: args.genre,
        };

        console.log(userModel);
        return args;
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