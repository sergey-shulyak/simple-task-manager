const { ObjectId } = require('mongodb');
const { getCollection, renameId } = require('./utils');

const flattenArray = (allTickets, columnTickets) =>
  [...allTickets, ...columnTickets];

const ticketsWithColumnId = column => column.tickets.map(ticket => ({
  ...ticket, columnId: column._id
}));

const getTickets = boardId => new Promise(async (resolve, reject) => {
  try {
    const boards = await getCollection('boards');
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

module.exports = { getTickets };
