import { normalize } from 'normalizr';

import { boardListSchema, boardSchema } from '../store/schema';
import request from './utils';

const entity = 'boards';

export async function getBoards() {
  return normalize(await request({ entity }), boardListSchema);
}

export async function getBoard(id) {
  return normalize(await request({ entity, id }), boardSchema);
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
