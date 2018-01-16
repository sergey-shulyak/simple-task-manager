const { ObjectId } = require('mongodb');
const { rejectOnError, renameId, getCollection } = require('./utils');

const getTicketsCollection = () => new Promise(rejectOnError(async (resolve) => {
  const ticketsCollection = await getCollection('tickets');
  resolve(ticketsCollection);
}));

const getTickets = boardId => new Promise(rejectOnError(async (resolve) => {
  const bId = new ObjectId(boardId);
  const ticketsCollection = await getTicketsCollection();

  const tickets = await ticketsCollection.find({ boardId: bId }).toArray();

  resolve(renameId(...tickets));
}));

const createTicket = (boardId, ticket) => new Promise(rejectOnError(async (resolve) => {
  const bId = new ObjectId(boardId);
  const ticketsCollection = await getTicketsCollection();

  const { ops } = await ticketsCollection.insertOne({
    ...ticket, boardId: bId
  });
  const createdTicket = ops[0];

  resolve(createdTicket);
}));

const getTicket = id => new Promise(rejectOnError(async (resolve) => {
  const _id = new ObjectId(id);
  const ticketsCollection = await getTicketsCollection();

  const ticket = await ticketsCollection.findOne({ _id });

  resolve(...renameId(ticket));
}));

const updateTicket = ticket => new Promise(rejectOnError(async (resolve) => {
  const { id, boardId, ...data } = ticket;
  const _id = new ObjectId(id);
  const bId = new ObjectId(boardId);

  const ticketsCollection = await getTicketsCollection();

  const { ok, value } = await ticketsCollection.findOneAndUpdate({ _id }, {
    $set: { ...data, boardId: bId }
  });

  resolve({ modified: ok === 1, updatedTicket: value });
}));

const deleteTicket = id => new Promise(rejectOnError(async (resolve) => {
  const ticketCollection = await getTicketsCollection();
  const _id = new ObjectId(id);

  const { ok, value } = await ticketCollection.findOneAndDelete({ _id });

  resolve({ deleted: ok === 1, deletedTicket: value });
}));

const deleteBoardTickets = bId => new Promise(rejectOnError(async (resolve) => {
  const ticketCollection = await getTicketsCollection();
  const boardId = new ObjectId(bId);

  const { deletedCount } = await ticketCollection.deleteMany({ boardId });

  resolve({ deletedCount });
}));

module.exports = {
  getTickets,
  createTicket,
  getTicket,
  updateTicket,
  deleteTicket,
  deleteBoardTickets
};
