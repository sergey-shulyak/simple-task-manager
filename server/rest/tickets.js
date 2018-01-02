const express = require('express');
const api = require('../persistence/tickets');

const router = express.Router({ mergeParams: true });

router.route('/tickets')
  .get(async (req, res, next) => {
    try {
      res.json(await api.getTickets(req.params.boardId));
    } catch (error) {
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      res.json(await api.createTicket(req.params.boardId, req.body));
    } catch (error) {
      next(error);
    }
  });

router.route('/tickets/:ticketId')
  .get(async (req, res, next) => {
    try {
      res.json(await api.getTicket(req.params.ticketId));
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
