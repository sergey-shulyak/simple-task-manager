import { takeEvery, call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { getTickets } from '../api/tickets';
import { ticketListSchema } from '../store/schema';
import { saveTicketsToStore, saveTicketsError } from '../store/actions/tickets';

import * as actions from '../store/actionTypes/tickets';

export function* fetchTickets({ payload: { id } }) {
  try {
    const tickets = yield call(getTickets, id);
    yield put(saveTicketsToStore(normalize(tickets, ticketListSchema)));
  } catch (error) {
    yield put(saveTicketsError(error));
  }
}

export default function* () {
  yield takeEvery(actions.FETCH_TICKETS, fetchTickets);
}
