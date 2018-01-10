import { API_HOST, API_PORT } from '../../properties.json';

const API = `http://${API_HOST}:${API_PORT}/api`;
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
