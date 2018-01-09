import { takeEvery, call, put } from 'redux-saga/effects';

import { getTickets } from '../../api/tickets';
import { saveTicketsToStore } from '../../store/actions/tickets';
import { setTicketsError } from '../../store/actions/ui';

import * as actions from '../../store/actionTypes/tickets';

export function* fetchTickets({ payload: { id } }) {
  try {
    const data = yield call(getTickets, id);
    yield put(saveTicketsToStore(data));
  } catch (error) {
    yield put(setTicketsError(error));
  }
}

export default function* () {
  yield takeEvery(actions.FETCH_TICKETS, fetchTickets);
}
