import { normalize } from 'normalizr';

import request from './utils';
import { ticketListSchema, ticketSchema } from '../store/schema';

const entity = id => `boards/${id}/tickets`;

export function getTickets(id) {
  return request({ entity: entity(id) })
    .then(data => normalize(data, ticketListSchema));
}

export function getTicket(boardId, id) {
  return request({ entity: entity(boardId), id })
    .then(data => normalize(data, ticketSchema));
}

export function createTicket(boardId, ticket) {
  return request({ method: 'POST', entity: entity(boardId), body: ticket });
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
