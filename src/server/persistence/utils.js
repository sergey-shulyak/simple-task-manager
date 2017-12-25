const { MongoClient } = require('mongodb');

// TODO: Move to .env
const url = 'mongodb://localhost:27017';
const DB_NAME = 'taskManager';

const getConnection = () => new Promise(async (resolve, reject) => {
  try {
    resolve(await MongoClient.connect(url));
  } catch (error) {
    reject(new Error(error));
  }
});

const getDatabase = dbName => new Promise(async (resolve, reject) => {
  try {
    const connection = await getConnection();

    resolve(connection.db(dbName));
  } catch (error) {
    reject(new Error(error));
  }
});

const getCollection = colName => new Promise(async (resolve, reject) => {
  try {
    const database = await getDatabase(DB_NAME);

    resolve(database.collection(colName));
  } catch (error) {
    reject(new Error(error));
  }
});

const renameId = (...entities) => entities.map((entity) => {
  const { _id, ...rest } = entity;
  const entries = Object.entries(rest);

  const mappedEntity = { id: _id };

  entries.forEach(([key, data]) => {
    mappedEntity[key] = Array.isArray(data) ? renameId(...data) : data;
  });

  return mappedEntity;
});

module.exports = {
  getConnection,
  getDatabase,
  getCollection,
  renameId
};
