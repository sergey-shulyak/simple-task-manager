import request from './utils';

const entity = id => `boards/${id}/tickets`;

export function getTickets(id) {
  return request({ entity: entity(id) });
}

export function getTicket(boardId, id) {
  return request({ entity: entity(boardId), id });
}

export function createTicket(boardId, board) {
  return request({ method: 'POST', entity: entity(boardId), body: board });
}

export function updateTicket(boardId, ticket) {
  return request({
    method: 'PUT',
    entity: entity(boardId),
    id: ticket.id,
    body: ticket
  });
}

export function deleteTicket(boardId, id) {
  return request({ method: 'DELETE', entity: entity(boardId), id });
}
