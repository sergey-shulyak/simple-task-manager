import { API_ROOT } from '../../properties.json';

const headers = { 'Content-Type': 'application/json' };

function request(method, entity, id, body) {
  return fetch(`${API_ROOT}/${entity}/${id || ''}`, { method, headers, body })
    .then(response => response.json());
}

const BOARDS = 'boards';

export function getBoards() {
  return request('GET', BOARDS);
}

export function getBoard(id) {
  return request('GET', BOARDS, id);
}

export function updateBoard(board) {
  return request('PUT', BOARDS, board.id, JSON.stringify(board));
}

export function deleteBoard(id) {
  return request('DELETE', BOARDS, id);
}
