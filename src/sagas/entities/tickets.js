import { all, takeEvery, call, put } from 'redux-saga/effects';

import { getTickets, createTicket, updateTicket, deleteTicket } from '../../api/tickets';

import { saveTicketsToStore, fetchTickets } from '../../store/actions/tickets';
import * as ui from '../../store/actions/ui';

import * as actions from '../../store/actionTypes/tickets';

import modalNames from '../../components/modals/modalNames';

export function* fetchTicketsSaga({ payload: { id } }) {
  try {
    const data = yield call(getTickets, id);
    yield put(saveTicketsToStore(data));
  } catch (error) {
    yield put(ui.setTicketsError(error.message));
  }
}

export function* createTicketSaga({ payload = {}, meta = {} }) {
  try {
    yield call(createTicket, meta.boardId, payload);

    yield put(ui.hideModal(modalNames.EDIT_TICKET));
    yield put(fetchTickets(meta.boardId));
  } catch (error) {
    yield put(ui.setTicketsError(error.message));
  }
}

export function* updateTicketSaga({ payload = {}, meta = {} }) {
  try {
    yield call(updateTicket, payload);

    yield put(ui.hideModal(modalNames.EDIT_TICKET));
    yield put(fetchTickets(meta.boardId));
  } catch (error) {
    yield put(ui.setTicketsError(error.message));
  }
}

export function* deleteTicketSaga({ payload = {}, meta = {} }) {
  try {
    yield call(deleteTicket, payload.ticketId);

    yield put(ui.hideModal(modalNames.DELETE_TICKET));
    yield put(fetchTickets(meta.boardId));
  } catch (error) {
    yield put(ui.setTicketsError(error.message));
  }
}

export default function* () {
  yield all([
    takeEvery(actions.FETCH_TICKETS, fetchTicketsSaga),
    takeEvery(actions.CREATE_TICKET, createTicketSaga),
    takeEvery(actions.UPDATE_TICKET, updateTicketSaga),
    takeEvery(actions.DELETE_TICKET, deleteTicketSaga)
  ]);
}
