import request from './utils';

const entity = id => `boards/${id}/columns`;

export function getColumns(id) {
  return request({ entity: entity(id) });
}

export function getColumn(boardId, id) {
  return request({ entity: entity(boardId), id });
}

export function createColumn(boardId, column) {
  return request({ method: 'POST', entity: entity(boardId), body: column });
}

export function updateColumn(boardId, column) {
  return request({
    method: 'PUT',
    entity: entity(boardId),
    id: column.id,
    body: column
  });
}

export function deleteColumn(boardId, id) {
  return request({ method: 'DELETE', entity: entity(boardId), id });
}
