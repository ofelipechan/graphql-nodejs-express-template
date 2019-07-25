const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/routes');

app.use('*', cors());
app.use(routes);

app.listen(process.env.PORT || 4000, () => {
    console.log('A GraphQL API running at port 4000');
});
