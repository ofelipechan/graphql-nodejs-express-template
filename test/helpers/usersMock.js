const faker = require('faker');
const perfis = require('./perfisMock');

const generateListData = () => {
    let data = [];
    for (let i = 0; i < 3; i++) {
        const email = faker.internet.email();
        data.push({
            id: faker.random.uuid(),
            nome: faker.name.firstName(),
            email: email,
            usuario: email,
            documento: faker.address.zipCode(),
            documentoProprietario: faker.address.zipCode(),
            perfis: perfis.perfilMockList
        });
    }
    return data;
};


exports.singleMockUser = {
    id: faker.random.uuid(),
    nome: faker.name.firstName(),
    email: faker.internet.email(),
    usuario: faker.internet.email(),
    documento: faker.address.zipCode(),
    documentoProprietario: faker.address.zipCode(),
    perfis: perfis.perfilMockList
};

exports.usersMockList = generateListData();
