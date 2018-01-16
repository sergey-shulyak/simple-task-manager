const { ObjectId } = require('mongodb');
const { deleteBoardTickets } = require('./tickets');
const {
  rejectOnError,
  getCollection,
  renameId,
  populateColumnsWithIdOrDefault
} = require('./utils');

const getBoardsCollection = () => new Promise(rejectOnError(async (resolve) => {
  const boardCollection = await getCollection('boards');
  resolve(boardCollection);
}));

const getBoards = () => new Promise(rejectOnError(async (resolve) => {
  const boardCollection = await getBoardsCollection();
  const boards = await boardCollection.find().toArray();

  resolve(renameId(...boards));
}));

const getBoard = id => new Promise(rejectOnError(async (resolve) => {
  const boardCollection = await getBoardsCollection();
  const _id = new ObjectId(id);

  const board = await boardCollection.findOne({ _id });

  resolve(...renameId(board));
}));

const createBoard = board => new Promise(rejectOnError(async (resolve) => {
  const boardCollection = await getBoardsCollection();

  const { columns, ...props } = board;
  const columnsWithIds = populateColumnsWithIdOrDefault(columns);

  const { ops } = await boardCollection.insertOne({
    ...props, columns: columnsWithIds
  });

  const createdBoard = ops[0];

  resolve(createdBoard);
}));

const updateBoard = board => new Promise(rejectOnError(async (resolve) => {
  const { id, columns, ...rest } = board;
  const _id = new ObjectId(id);

  const existingColumns = (await getBoard(id)).columns;
  const columnsWithId = populateColumnsWithIdOrDefault(columns, existingColumns);

  const boardCollection = await getBoardsCollection();
  const { ok, value } = await boardCollection.findOneAndUpdate({ _id }, {
    $set: { ...rest, columns: columnsWithId }
  });

  resolve({ modified: ok === 1, updatedBoard: value });
}));

const deleteBoard = id => new Promise(rejectOnError(async (resolve) => {
  const boardCollection = await getBoardsCollection();
  const _id = new ObjectId(id);

  await deleteBoardTickets(id);
  const { ok, value } = await boardCollection.findOneAndDelete({ _id });

  resolve({ deleted: ok === 1, deletedBoard: value });
}));

module.exports = {
  getBoardsCollection,
  getBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard
};
