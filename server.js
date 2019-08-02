const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const routes = require('./src/routes');

const app = express();

app.use('*', cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`A GraphQL API running at port ${port}`);
});
