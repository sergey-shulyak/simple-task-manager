const express = require('express');
const tickets = require('./tickets');
const api = require('../persistence/boards');

const router = express.Router();

router.route('/boards')
  .get(async (req, res, next) => {
    try {
      res.json(await api.getBoards());
    } catch (error) {
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const board = req.body;

      res.json(await api.createBoard(board));
    } catch (error) {
      next(error);
    }
  });

router.route('/boards/:boardId')
  .get(async (req, res, next) => {
    try {
      res.json(await api.getBoard(req.params.boardId));
    } catch (error) {
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      res.json(await api.updateBoard(req.body));
    } catch (error) {
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      res.json(await api.deleteBoard(req.params.boardId));
    } catch (error) {
      next(error);
    }
  });

router.use('/boards/:boardId', tickets);

module.exports = router;
