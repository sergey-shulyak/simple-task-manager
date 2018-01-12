const { ObjectId } = require('mongodb');
const { getCollection, renameId } = require('./utils');

const getBoardsCollection = () => new Promise(async (resolve, reject) => {
  try {
    const boardCollection = await getCollection('boards');
    resolve(boardCollection);
  } catch (error) {
    reject(new Error(error));
  }
});

const getBoards = () => new Promise(async (resolve, reject) => {
  try {
    const boardCollection = await getBoardsCollection();
    const boards = await boardCollection.find().toArray();

    resolve(renameId(...boards));
  } catch (error) {
    reject(new Error(error));
  }
});

const getBoard = id => new Promise(async (resolve, reject) => {
  try {
    const boardCollection = await getBoardsCollection();
    const _id = new ObjectId(id);

    const board = await boardCollection.findOne({ _id });

    resolve(...renameId(board));
  } catch (error) {
    reject(new Error(error));
  }
});

const generateDefaultColumns = () => ([
  {
    _id: new ObjectId(),
    title: 'To Do'
  },
  {
    _id: new ObjectId(),
    title: 'In Progress'
  },
  {
    _id: new ObjectId(),
    title: 'Done'
  }
]);

const populateColumnsWithIdOrDefault = (columns) => {
  if (columns.length === 0) {
    return generateDefaultColumns();
  }

  return columns.map(({ id = new ObjectId(), ...props }) => ({
    _id: id,
    ...props
  }));
};


const createBoard = board => new Promise(async (resolve, reject) => {
  try {
    const boardCollection = await getBoardsCollection();

    const { columns, ...props } = board;
    const columnsWithIds = populateColumnsWithIdOrDefault(columns);

    const { ops } = await boardCollection.insertOne({
      ...props, columns: columnsWithIds
    });

    const createdBoard = ops[0];

    resolve(createdBoard);
  } catch (error) {
    reject(new Error(error));
  }
});

const updateBoard = board => new Promise(async (resolve, reject) => {
  try {
    const { id, columns, ...rest } = board;
    const _id = new ObjectId(id);

    const columnsWithId = populateColumnsWithIdOrDefault(columns);

    const boardCollection = await getBoardsCollection();

    const { modifiedCount } = await boardCollection.updateOne({ _id }, {
      $set: { ...rest, columns: columnsWithId }
    });

    resolve({ id, modified: modifiedCount > 0 });
  } catch (error) {
    reject(new Error(error));
  }
});

const deleteBoard = id => new Promise(async (resolve, reject) => {
  try {
    const boardCollection = await getBoardsCollection();
    const _id = new ObjectId(id);

    const { deletedCount } = await boardCollection.deleteOne({ _id });

    resolve({ id, deleted: deletedCount > 0 });
  } catch (error) {
    reject(new Error(error));
  }
});

module.exports = {
  getBoardsCollection,
  getBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard
};
