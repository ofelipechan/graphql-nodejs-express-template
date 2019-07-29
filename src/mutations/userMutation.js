const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
} = graphql;
const UserType = require('../types/userType');
const PerfilType = require('../types/profileType');

const add = {
    type: UserType.userType,
    args: {
        nome: {
            type: new GraphQLNonNull(GraphQLString)
        },
        dataNascimento: {
            type: GraphQLString
        },
        emailPrimario: {
            type: new GraphQLNonNull(GraphQLString)
        },
        usuario: {
            type: GraphQLString
        },
        senha: {
            type: new GraphQLNonNull(GraphQLString)
        },
        documento: {
            type: new GraphQLNonNull(GraphQLString)
        },
        documentoProprietario: {
            type: GraphQLString
        },
        perfis: {
            type: new GraphQLList(PerfilType.addPerfilType)
        }
    },
    resolve(parent, args) {
        let userModel = {
            nome: args.nome,
            emailr: args.email,
        };

        console.log(args);
        // console.log(userModel);
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