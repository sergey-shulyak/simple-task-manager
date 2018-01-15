import { normalize } from 'normalizr';

import request from './utils';
import { ticketListSchema, ticketSchema } from '../store/schema';

const entity = 'tickets';
const boardTickets = id => `boards/${id}/tickets`;

export async function getTickets(boardId) {
  return normalize(
    await request({ entity: boardTickets(boardId) }),
    ticketListSchema);
}

export async function getTicket(id) {
  return normalize(
    await request({ entity, id }),
    ticketSchema);
}

export function createTicket(boardId, ticket) {
  return request({
    method: 'POST',
    entity: boardTickets(boardId),
    body: ticket
  });
}

export function updateTicket(ticket) {
  return request({
    method: 'PUT',
    entity,
    id: ticket.id,
    body: ticket
  });
}

export function deleteTicket(id) {
  return request({ method: 'DELETE', entity, id });
}
