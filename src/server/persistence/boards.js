const { ObjectId } = require('mongodb');
const { getCollection, renameId } = require('./utils');

const getBoards = () => new Promise(async (resolve, reject) => {
  try {
    const boardCollection = await getCollection('boards');

    const boards = await boardCollection.find()
      .project({ 'columns.tickets': 0 })
      .toArray();

    resolve(renameId(...boards));
  } catch (error) {
    reject(new Error(error));
  }
});

const getBoard = boardId => new Promise(async (resolve, reject) => {
  try {
    const boardCollection = await getCollection('boards');
    const _id = new ObjectId(boardId);

    const board = await boardCollection.findOne(
      { _id },
      { projection: { 'columns.tickets': 0 } }
    );

    resolve(...renameId(board));
  } catch (error) {
    reject(new Error(error));
  }
});

module.exports = { getBoards, getBoard };
