'use strict';

const variables = require('./environment');
const environment = process.env.NODE_ENV || 'local'; // local, dev, qas, prod

console.log('Enviroment running:', environment);

module.exports = {
    environment,
    variables
};