const { ObjectId } = require('mongodb');
const { getBoardsCollection } = require('./boards');
const { renameId } = require('./utils');

const flattenArray = (allTickets, columnTickets) =>
  [...allTickets, ...columnTickets];

const ticketsWithColumnId = column => column.tickets.map(ticket => ({
  ...ticket, columnId: column._id
}));

const getTickets = boardId => new Promise(async (resolve, reject) => {
  try {
    const boards = await getBoardsCollection();
    const _id = new ObjectId(boardId);

    const board = await boards.findOne(
      { _id },
      { projection: { 'columns._id': 1, 'columns.tickets': 1 } }
    );

    const tickets = board.columns
      .map(ticketsWithColumnId)
      .reduce(flattenArray);

    resolve(renameId(...tickets));
  } catch (error) {
    reject(new Error(error));
  }
});

const createTicket = (boardId, ticket) => new Promise(async (resolve, reject) => {
  try {
    const _id = new ObjectId(boardId);
    const boards = await getBoardsCollection();

    const { columnId, ...ticketData } = ticket;
    const cId = new ObjectId(columnId);

    const { modifiedCount } = await boards.updateOne(
      { _id, 'columns._id': cId },
      { $push: { 'columns.$.tickets': ticketData } }
    );

    resolve({ modified: modifiedCount > 0 });
  } catch (error) {
    reject(new Error(error));
  }
});

module.exports = { getTickets, createTicket };
