import { normalize } from 'normalizr';

import * as api from '../tickets';
import { ticketListSchema, ticketSchema } from '../../store/schema';

import data from './data.json';

jest.mock('../utils.js');

describe('Tickets API', () => {
  it('Should fetch all tickets by board id and normalize them', async () => {
    const boardId = 1;

    const expectedData = normalize(data.tickets, ticketListSchema);
    const actualData = await api.getTickets(boardId);

    expect(actualData).toEqual(expectedData);
  });

  it('Should fetch ticket by boardId and id and normalize it', async () => {
    const boardId = 1;
    const id = 3;

    const matchingTicket = data.tickets.find(ticket =>
      ticket.boardId === boardId && ticket.id === id);

    const expectedData = normalize(matchingTicket, ticketSchema);
    const actualData = await api.getTicket(boardId, id);

    expect(actualData).toEqual(expectedData);
  });

  it('Should create ticket on server', async () => {
    const boardId = 1;

    const expectedData = {
      id: 42,
      title: 'Test ticket',
      description: 'Test description',
      priority: 'medium',
      type: 'task',
      boardId
    };

    const actualData = await api.createTicket(boardId, expectedData);

    expect(actualData).toEqual(expectedData);
  });

  it('Should delete ticket from server', async () => {
    const boardId = 1;
    const id = 2;

    const actualData = await api.deleteTicket(boardId, id);

    expect(actualData).toEqual(id);
  });
});
