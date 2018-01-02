const { ObjectId } = require('mongodb');
const { renameId, getCollection } = require('./utils');

const getTicketsCollection = () => new Promise(async (resolve, reject) => {
  try {
    const ticketsCollection = await getCollection('tickets');
    resolve(ticketsCollection);
  } catch (error) {
    reject(new Error(error));
  }
});

const getTickets = boardId => new Promise(async (resolve, reject) => {
  try {
    const bId = new ObjectId(boardId);
    const ticketsCollection = await getTicketsCollection();

    const tickets = await ticketsCollection.find({ boardId: bId }).toArray();

    resolve(renameId(...tickets));
  } catch (error) {
    reject(new Error(error));
  }
});

const createTicket = (boardId, ticket) => new Promise(async (resolve, reject) => {
  try {
    const bId = new ObjectId(boardId);
    const ticketsCollection = await getTicketsCollection();

    const { ops } = await ticketsCollection.insertOne({
      ...ticket, boardId: bId
    });
    const createdTicket = ops[0];

    resolve(createdTicket);
  } catch (error) {
    reject(new Error(error));
  }
});

const getTicket = id => new Promise(async (resolve, reject) => {
  try {
    const _id = new ObjectId(id);
    const ticketsCollection = await getTicketsCollection();

    const ticket = await ticketsCollection.findOne({ _id });

    resolve(...renameId(ticket));
  } catch (error) {
    reject(new Error(error));
  }
});

const updateTicket = ticket => new Promise(async (resolve, reject) => {
  try {
    const { id, ...data } = ticket;
    const _id = new ObjectId(id);

    const ticketsCollection = await getTicketsCollection();

    const { modifiedCount } = await ticketsCollection.updateOne({ _id }, {
      $set: { ...data }
    });

    resolve({ id, modified: modifiedCount > 0 });
  } catch (error) {
    reject(new Error(error));
  }
});

const deleteTicket = id => new Promise(async (resolve, reject) => {
  try {
    const ticketCollection = await getTicketsCollection();
    const _id = new ObjectId(id);

    const { deletedCount } = await ticketCollection.deleteOne({ _id });

    resolve({ id, deleted: deletedCount > 0 });
  } catch (error) {
    reject(new Error(error));
  }
});

module.exports = {
  getTickets,
  createTicket,
  getTicket,
  updateTicket,
  deleteTicket
};
