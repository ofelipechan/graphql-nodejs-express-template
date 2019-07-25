const graphqlHTTP = require('express-graphql');
const { userSchema, profileSchema } = require('./schemas/index');
const express = require('express');
const app = express();

const user = graphqlHTTP({
    schema: userSchema,
    rootValue: global,
    graphiql: true
});

const profile = graphqlHTTP({
    schema: profileSchema,
    rootValue: global,
    graphiql: true  
})

app.use(user);
app.use(profile);

module.exports = app;