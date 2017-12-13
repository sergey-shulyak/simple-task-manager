import { put, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { fetchTickets } from '../tickets';
import { getTickets } from '../../api/tickets';
import * as types from '../../store/actionTypes/tickets';
import { ticketListSchema } from '../../store/schema';

describe('Ticket sagas', () => {
  it('Should fetch tickets and save them on payload provided', () => {
    const id = 42;
    const tickets = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];

    const { entities } = normalize(tickets, ticketListSchema);
    const action = { type: types.FETCH_TICKETS, payload: { id } };

    const expectedResults = {
      callGetTickets: call(getTickets, id),
      putSaveTickets: put({ type: types.SAVE_TICKETS_TO_STORE, payload: entities.tickets })
    };

    const saga = fetchTickets(action);

    expect(saga.next().value).toEqual(expectedResults.callGetTickets);
    expect(saga.next(tickets).value).toEqual(expectedResults.putSaveTickets);
    expect(saga.next().done).toBe(true);
  });

  it('Should save error', () => {
    const id = 42;
    const action = { type: types.FETCH_TICKETS, payload: { id } };

    const expectedError = new Error('Unexpected input given to normalize. Expected type to be "object", found "undefined".');
    const expectedResults = {
      callGetTickets: call(getTickets, id),
      putSaveError: put({ type: types.SAVE_TICKETS_ERROR, error: true, payload: expectedError })
    };

    const saga = fetchTickets(action);

    expect(saga.next().value).toEqual(expectedResults.callGetTickets);
    expect(saga.next().value).toEqual(expectedResults.putSaveError);
    expect(saga.next().done).toBe(true);
  });
});
