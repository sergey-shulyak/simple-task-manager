const { MongoClient } = require('mongodb');

const { DB_HOST, DB_PORT, DB_NAME } = process.env;
const url = `mongodb://${DB_HOST}:${DB_PORT}`;

let db;

const getDatabase = () => new Promise(async (resolve, reject) => {
  try {
    if (!db) {
      const connection = await MongoClient.connect(url);
      db = await connection.db(DB_NAME);
    }

    resolve(db);
  } catch (error) {
    reject(new Error(error));
  }
});

const getCollection = colName => new Promise(async (resolve, reject) => {
  try {
    const database = await getDatabase();

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
  getDatabase,
  getCollection,
  renameId
};
