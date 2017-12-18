const fs = require('fs');

export default function request({ method, entity, id, body }) {
  return new Promise((resolve, reject) => {
    fs.readFile('./src/api/tests/data.json', 'utf8', (err, data) => {
      if (err) reject(err);

      if (method === 'DELETE' && id) {
        resolve(id);
      }

      if (['POST', 'PUT'].includes(method)) {
        resolve(body);
      }

      const fileData = JSON.parse(data);
      const lastWordRegexp = /(\w+)\/?$/;
      const entityName = lastWordRegexp.exec(entity)[1];

      const requestedData = id
        ? fileData[entityName].find(object => object.id === id)
        : fileData[entityName];

      resolve(requestedData);
    });
  });
}
