const faker = require('faker');

const generateListData = () => {
    let data = [];
    for (let i = 0; i < 2; i++) {
        data.push({
            id: faker.random.uuid(),
            nome: faker.name.firstName(),
            permissoes: generateRecursosList()
        });
    }
    return data;
};

const generateRecursosList = () => {
    let data = [];
    for (let i = 0; i < 3; i++) {
        data.push({
            recurso: {
                nome: faker.random.word(),
                frn: faker.random.uuid()
            },
            visualizar: faker.random.boolean(),
            inserir: faker.random.boolean(),
            editar: faker.random.boolean(),
            deletar: faker.random.boolean()
        });
    }
    return data;
};

exports.perfilMockList = generateListData();
exports.singlePerfilMock = [{
    id: faker.random.uuid(),
    nome: faker.name.firstName(),
    permissoes: [{
        recurso: {
            nome: faker.random.word,
            frn: faker.random.uuid()
        },
        visualizar: faker.random.boolean(),
        inserir: faker.random.boolean(),
        editar: faker.random.boolean(),
        deletar: faker.random.boolean()
    }]
}];
