import { API_ROOT } from '../../properties.json';

const headers = { 'Content-Type': 'application/json' };

export default function request({
  method = 'GET',
  entity,
  id = '',
  body
}) {
  const params = { method, headers, body: JSON.stringify(body) };

  return fetch(`${API_ROOT}/${entity}/${id}`, params)
    .then(response => response.json());
}
