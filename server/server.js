const express = require('express');
const morgan = require('morgan');
const db = require('../database/index.js');
const router = require('./router/index.js');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./client/dist'));

app.use('/data/toptracks', router);

app.listen(port, () => console.log('Port:', port));