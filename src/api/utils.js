const API = `http://${process.env.API_HOST}:${process.env.API_PORT}/api`;
const headers = { 'Content-Type': 'application/json' };

export default async function request({
  method = 'GET',
  entity,
  id = '',
  body
}) {
  const params = { method, headers, body: JSON.stringify(body) };
  const response = await fetch(`${API}/${entity}/${id}`, params);
  const responseBody = response.json();

  if (!response.ok) {
    throw new Error(`${(await responseBody).error}`);
  }

  return responseBody;
}
