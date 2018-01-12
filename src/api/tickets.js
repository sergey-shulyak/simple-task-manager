import { normalize } from 'normalizr';

import request from './utils';
import { ticketListSchema, ticketSchema } from '../store/schema';

const boardTickets = id => `boards/${id}/tickets`;
const tickets = 'tickets';

export function getTickets(boardId) {
  return request({ entity: boardTickets(boardId) })
    .then(data => normalize(data, ticketListSchema));
}

export function getTicket(id) {
  return request({ entity: tickets, id })
    .then(data => normalize(data, ticketSchema));
}

export function createTicket(boardId, ticket) {
  return request({ method: 'POST', entity: boardTickets(boardId), body: ticket });
}

export function updateTicket(ticket) {
  return request({
    method: 'PUT',
    entity: tickets,
    id: ticket.id,
    body: ticket
  });
}

export function deleteTicket(id) {
  return request({ method: 'DELETE', entity: tickets, id });
}
