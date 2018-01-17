import { all, takeEvery, call, put } from 'redux-saga/effects';

import * as api from '../../api/tickets';
import * as actions from '../../store/actionTypes/tickets';

import { saveTicketsToStore, fetchTickets } from '../../store/actions/tickets';
import { hideModal, setTicketsError } from '../../store/actions/ui';

import modalNames from '../../components/modals/modalNames';
import { showInfoToast, showErrorToast } from '../utils';

export function* fetchTicketsSaga({ payload: { id } }) {
  try {
    const data = yield call(api.getTickets, id);
    yield put(saveTicketsToStore(data));
  } catch (error) {
    yield put(setTicketsError(error.message));
    yield call(showErrorToast, 'Failed to fetch tickets', error);
  }
}

export function* createTicketSaga({ payload = {}, meta = {} }) {
  try {
    const createdTicket = yield call(api.createTicket, meta.boardId, payload);

    yield put(fetchTickets(meta.boardId));
    yield put(hideModal(modalNames.EDIT_TICKET));
    yield call(showInfoToast, `Ticket «${createdTicket.title}» created`);
  } catch (error) {
    yield put(setTicketsError(error.message));
    yield call(showErrorToast, `Failed to create ticket «${payload.title}»`, error);
  }
}

export function* updateTicketSaga({ payload = {}, meta = {} }) {
  try {
    const { updatedTicket } = yield call(api.updateTicket, payload);

    yield put(fetchTickets(meta.boardId));
    yield put(hideModal(modalNames.EDIT_TICKET));
    yield call(showInfoToast, `Ticket «${updatedTicket.title}» updated`);
  } catch (error) {
    yield put(setTicketsError(error.message));
    yield call(showErrorToast, `Failed to update ticket «${payload.title}»`, error);
  }
}

export function* deleteTicketSaga({ payload = {}, meta = {} }) {
  try {
    const { deletedTicket } = yield call(api.deleteTicket, payload.ticketId);

    yield put(fetchTickets(meta.boardId));
    yield put(hideModal(modalNames.DELETE_TICKET));
    yield call(showInfoToast, `Ticket «${deletedTicket.title}» removed`);
  } catch (error) {
    yield put(setTicketsError(error.message));
    yield call(showErrorToast, 'Failed to remove ticket', error);
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
