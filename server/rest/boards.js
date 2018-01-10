const express = require('express');
const tickets = require('./tickets');
const api = require('../persistence/boards');

const router = express.Router();

router.route('/boards')
  .get(async (req, res) => {
    try {
      res.json(await api.getBoards());
    } catch (error) {
      res.send(new Error(error));
    }
  })
  .post(async (req, res) => {
    try {
      const board = req.body;

      res.json(await api.createBoard(board));
    } catch (error) {
      res.send(new Error(error));
    }
  });

router.route('/boards/:boardId')
  .get(async (req, res) => {
    try {
      res.json(await api.getBoard(req.params.boardId));
    } catch (error) {
      res.send(new Error(error));
    }
  })
  .put(async (req, res) => {
    try {
      res.json(await api.updateBoard(req.body));
    } catch (error) {
      res.send(new Error(error));
    }
  })
  .delete(async (req, res) => {
    try {
      res.json(await api.deleteBoard(req.params.boardId));
    } catch (error) {
      res.send(new Error(error));
    }
  });

router.use('/boards/:boardId', tickets);

module.exports = router;
