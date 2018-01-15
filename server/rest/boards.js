const express = require('express');
const tickets = require('./tickets');
const api = require('../persistence/boards');
const { passErrorNext } = require('./utils');

const router = express.Router();

router.route('/boards')
  .get(passErrorNext(async (req, res) =>
    res.json(await api.getBoards())
  ))
  .post(passErrorNext(async (req, res) =>
    res.json(await api.createBoard(req.body))
  ));

router.route('/boards/:boardId')
  .get(passErrorNext(async (req, res) =>
    res.json(await api.getBoard(req.params.boardId))
  ))
  .put(passErrorNext(async (req, res) =>
    res.json(await api.updateBoard(req.body))
  ))
  .delete(passErrorNext(async (req, res) =>
    res.json(await api.deleteBoard(req.params.boardId))
  ));

router.use('/boards/:boardId', tickets);

module.exports = router;
