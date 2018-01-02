require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const boards = require('./rest/boards');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', boards);

app.use((req, res, next) => {
  console.log(`${req.method}\t${req.url}`);
  next();
});

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => console.log(`Started server on port ${PORT}`));
