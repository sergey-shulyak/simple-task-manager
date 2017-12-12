import { takeEvery, call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { getBoards, getBoard } from '../api/boards';
import { boardSchema, boardsSchema } from '../store/schema';
import { saveBoardsToStore, saveBoardsError, saveBoardToStore } from '../store/actions/boards';

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
  yield put(saveBoardToStore(normalize(board, boardSchema)));
}

export default function* () {
  yield takeEvery(actions.FETCH_BOARDS, fetchBoards);
  yield takeEvery(actions.FETCH_BOARD, fetchBoardById);
}
