const express = require('express');
const bodyParser = require('body-parser');
const carRouter = require('./lib/routes/car-router');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(carRouter);

app.listen(port, () => console.log(`Listening on port ${port}!`));





