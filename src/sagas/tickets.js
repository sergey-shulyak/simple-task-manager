import { takeEvery, call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { getTickets } from '../api/tickets';
import { ticketsSchema } from '../store/schema';
import { saveTicketsToStore } from '../store/actions/tickets';

import * as actions from '../store/actionTypes/tickets';

function* fetchTickets({ payload: { id } }) {
  const tickets = yield call(getTickets, id);
  yield put(saveTicketsToStore(normalize(tickets, ticketsSchema)));
}

export default function* () {
  yield takeEvery(actions.FETCH_TICKETS, fetchTickets);
}
