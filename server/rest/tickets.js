const express = require('express');
const api = require('../persistence/tickets');

const router = express.Router({ mergeParams: true });

router.route('/tickets')
  .get(async (req, res) => {
    try {
      res.json(await api.getTickets(req.params.boardId));
    } catch (error) {
      res.send(new Error(error));
    }
  })
  .post(async (req, res) => {
    try {
      res.json(await api.createTicket(req.params.boardId, req.body));
    } catch (error) {
      res.send(new Error(error));
    }
  });

router.route('/tickets/:ticketId')
  .get(async (req, res) => {
    try {
      res.json(await api.getTicket(req.params.ticketId));
    } catch (error) {
      res.send(new Error(error));
    }
  });

module.exports = router;
