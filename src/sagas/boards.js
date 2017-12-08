import { takeEvery, call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { getBoards, getBoard } from '../api/boards';
import { boardsSchema } from '../store/schema';
import { saveBoardsToStore, saveBoardsError, saveBoardToStore } from '../store/actions/boards';
// import { fetchColumns } from '../store/actions/columns';
// import { fetchTickets } from '../store/actions/tickets';

import * as actions from '../store/actionTypes/boards';

function* fetchBoards() {
  try {
    const boards = yield call(getBoards);
    yield put(saveBoardsToStore(normalize(boards, boardsSchema)));
  } catch (error) {
    yield put(saveBoardsError(error));
  }
}

function* fetchBoardById({ payload: { id } }) {
  const board = yield call(getBoard, id);
  yield put(saveBoardToStore(normalize(board, boardsSchema)));
  // yield all([
  // put(fetchColumns(id)),
  // put(fetchTickets(id))
  // ]);
}

export default function* () {
  yield takeEvery(actions.FETCH_BOARDS, fetchBoards);
  yield takeEvery(actions.FETCH_BOARD, fetchBoardById);
}
