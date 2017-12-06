import { takeEvery, call, put } from 'redux-saga/effects';

import { getBoards } from '../api/boards';
import { fetchBoardsSuccess, fetchBoardsError } from '../store/actions/boardListPage';

import * as actions from '../store/actionTypes/boardListPage';

function* fetchBoards() {
  try {
    const boards = yield call(getBoards);
    yield put(fetchBoardsSuccess(boards));
  } catch (error) {
    yield put(fetchBoardsError(error));
  }
}

export default function* () {
  yield takeEvery(actions.FETCH_BOARDS, fetchBoards);
}
