const express = require('express');
const api = require('../persistence/tickets');
const { passErrorNext } = require('./utils');

const router = express.Router({ mergeParams: true });

router.route('/tickets')
  .get(passErrorNext(async (req, res) =>
    res.json(await api.getTickets(req.params.boardId))
  ))
  .post(passErrorNext(async (req, res) =>
    res.json(await api.createTicket(req.params.boardId, req.body))
  ));

router.route('/tickets/:ticketId')
  .get(passErrorNext(async (req, res) =>
    res.json(await api.getTicket(req.params.ticketId))
  ))
  .put(passErrorNext(async (req, res) =>
    res.json(await api.updateTicket(req.body))
  ))
  .delete(passErrorNext(async (req, res) =>
    res.json(await api.deleteTicket(req.params.ticketId))
  ));

module.exports = router;
