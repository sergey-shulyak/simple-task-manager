const express = require('express');
const tickets = require('./tickets');
const { getBoards, getBoard } = require('../persistence/boards');

const router = express.Router();

router.route('/boards')
  .get(async (req, res) => {
    try {
      res.json(await getBoards());
    } catch (error) {
      res.send(new Error(error));
    }
  });

router.route('/boards/:boardId')
  .get(async (req, res) => {
    try {
      res.json(await getBoard(req.params.boardId));
    } catch (error) {
      res.send(new Error(error));
    }
  });

router.use('/boards/:boardId', tickets);

module.exports = router;
