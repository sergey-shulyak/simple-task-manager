import { normalize } from 'normalizr';

import { boardListSchema, boardSchema } from '../store/schema';
import request from './utils';

const entity = 'boards';

export function getBoards() {
  return request({ entity })
    .then(data => normalize(data, boardListSchema));
}

export function getBoard(id) {
  return request({ entity, id })
    .then(data => normalize(data, boardSchema));
}

export function createBoard(board) {
  return request({ method: 'POST', entity, body: board });
}

export function updateBoard(board) {
  return request({
    method: 'PUT',
    entity,
    id: board.id,
    body: board
  });
}

export function deleteBoard(id) {
  return request({ method: 'DELETE', entity, id });
}
