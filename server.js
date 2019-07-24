const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const app = express();

app.use('*', cors());

const userSchema = require('./schemas/userSchema');
app.use('/graphql', cors(), graphqlHTTP({
    schema: userSchema,
    rootValue: global,
    graphiql: true
}));

app.listen(process.env.PORT || 4000, () => {
    console.log('A GraphQL API running at port 4000');
}); 
