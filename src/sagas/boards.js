import { takeEvery, call, put } from 'redux-saga/effects';

import { getBoards } from '../api/boards';
import { saveBoardsToStore, saveBoardsError } from '../store/actions/boards';

import * as actions from '../store/actionTypes/boards';

function* fetchBoards() {
  try {
    const boards = yield call(getBoards);
    yield put(saveBoardsToStore(boards));
  } catch (error) {
    yield put(saveBoardsError(error));
  }
}

export default function* () {
  yield takeEvery(actions.FETCH_BOARDS, fetchBoards);
}
