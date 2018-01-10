import { put, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { fetchTicketsSaga } from '../entities/tickets';
import { getTickets } from '../../api/tickets';
import * as types from '../../store/actionTypes/tickets';
import { SET_TICKETS_ERROR } from '../../store/actionTypes/ui';
import { ticketListSchema } from '../../store/schema';

describe('Ticket sagas', () => {
  it('Should fetch tickets and save them on id provided', () => {
    const id = 42;
    const tickets = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];

    const data = normalize(tickets, ticketListSchema);
    const action = { type: types.FETCH_TICKETS, payload: { id } };

    const expectedResults = {
      callGetTickets: call(getTickets, id),
      putSaveTickets: put({ type: types.SAVE_TICKETS_TO_STORE, payload: data.entities.tickets })
    };

    const saga = fetchTicketsSaga(action);

    expect(saga.next().value).toEqual(expectedResults.callGetTickets);
    expect(saga.next(data).value).toEqual(expectedResults.putSaveTickets);
    expect(saga.next().done).toBe(true);
  });

  it('Should save error', () => {
    const id = 42;
    const action = { type: types.FETCH_TICKETS, payload: { id } };

    const expectedResults = {
      callGetTickets: call(getTickets, id),
      putSetError: put({
        type: SET_TICKETS_ERROR,
        payload: expect.any(String)
      })
    };

    const saga = fetchTicketsSaga(action);

    expect(saga.next().value).toEqual(expectedResults.callGetTickets);
    expect(saga.next().value).toMatchObject(expectedResults.putSetError);
    expect(saga.next().done).toBe(true);
  });
});
