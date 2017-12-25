const express = require('express');
const cors = require('cors');
const boards = require('./rest/boards');

const app = express();

app.use(cors());
app.use('/api', boards);
app.use((req, res, next) => {
  console.log(`${req.method}\t${req.url}`);
  next();
});

app.listen(3000, () => console.log('Started server on port 3000'));
