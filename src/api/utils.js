const API = `http://${process.env.API_HOST}:${process.env.API_PORT}/api`;
const headers = { 'Content-Type': 'application/json' };

export default function request({
  method = 'GET',
  entity,
  id = '',
  body
}) {
  const params = { method, headers, body: JSON.stringify(body) };

  return fetch(`${API}/${entity}/${id}`, params)
    .then(response => response.json());
}
