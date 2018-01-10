require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const boards = require('./rest/boards');

const app = express();

const requestLogger = (req, res, next) => {
  console.log(`${req.method}\t${req.url}`);
  next();
};

const errorLogger = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};

/* eslint-disable no-unused-vars */
const errorSender = (err, req, res, next) => {
  res.status(500).json({ error: 'Server error occured' });
};
/* eslint-enable */

app.use(cors());
app.use(bodyParser.json());
app.use(requestLogger);
app.use('/api', boards);
app.use(errorLogger);
app.use(errorSender);

const PORT = process.env.API_PORT || 3000;

app.listen(PORT, () => console.log(`Started server on port ${PORT}`));
