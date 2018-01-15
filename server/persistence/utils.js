const { MongoClient, ObjectId } = require('mongodb');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const url =
  `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

let db;

const rejectOnError = func => (resolve, reject) => {
  try {
    func(resolve);
  } catch (error) {
    reject(error);
  }
};

const getDatabase = () => new Promise(rejectOnError(async (resolve) => {
  if (!db) {
    const connection = await MongoClient.connect(url);
    db = await connection.db(DB_NAME);
  }

  resolve(db);
}));

const getCollection = colName => new Promise(rejectOnError(async (resolve) => {
  const database = await getDatabase();

  resolve(database.collection(colName));
}));

const renameId = (...entities) => entities.map((entity) => {
  const { _id, ...rest } = entity;
  const entries = Object.entries(rest);

  const mappedEntity = { id: _id };

  entries.forEach(([key, data]) => {
    mappedEntity[key] = Array.isArray(data) ? renameId(...data) : data;
  });

  return mappedEntity;
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

const populateColumnsWithIdOrDefault = (columns, existingColumns = []) => {
  if (columns.length === 0) {
    return generateDefaultColumns();
  }

  const idsByTitles = existingColumns
    .reduce((result, column) => ({ ...result, [column.title]: column.id }), {});

  const columnsWithExistingIds = columns
    .map(column => ({ id: idsByTitles[column.title], ...column }));

  return columnsWithExistingIds.map(({ id = new ObjectId(), ...props }) => ({
    _id: id,
    ...props
  }));
};


module.exports = {
  rejectOnError,
  getDatabase,
  getCollection,
  renameId,
  populateColumnsWithIdOrDefault
};
