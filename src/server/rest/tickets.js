const express = require('express');
const { getTickets } = require('../persistence/tickets');

const router = express.Router({ mergeParams: true });

router.route('/tickets')
  .get(async (req, res) => {
    try {
      res.json(await getTickets(req.params.boardId));
    } catch (error) {
      res.send(new Error(error));
    }
  });

module.exports = router;
