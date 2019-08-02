const graphqlHTTP = require('express-graphql');
const {
    userSchema,
    profileSchema
} = require('./schemas/index');
const express = require('express');
const app = express();
const { environment } = require('./../settings/config');

const isLocalHost = environment === 'local';

const user = graphqlHTTP({
    schema: userSchema,
    rootValue: global,
    graphiql: isLocalHost
});

const profile = graphqlHTTP({
    schema: profileSchema,
    rootValue: global,
    graphiql: isLocalHost
});

app.use('/user', user);
app.use('/profile', profile);

module.exports = app;