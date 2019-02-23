const express = require('express'); //eslint-disable-line
const cors = require('cors'); //eslint-disable-line

const app = express();

const sender = require('./send/index');

app.use(cors());

app.post('/api/send', (req, res) => {
  sender(req, res);
});

app.listen(5050);
