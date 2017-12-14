import { takeEvery, call, put } from 'redux-saga/effects';

import { getBoard, getBoards } from '../api/boards';
import { saveBoardsToStore } from '../store/actions/boards';
import { setBoardsError } from '../store/actions/ui';

import * as actions from '../store/actionTypes/boards';

export function* fetchBoards({ payload = {} }) {
  const isFetchingSingleBoard = !!payload.id;

  try {
    const data = isFetchingSingleBoard
      ? yield call(getBoard, payload.id)
      : yield call(getBoards);

    yield put(saveBoardsToStore(data));
  } catch (error) {
    yield put(setBoardsError(error));
  }
}

export default function* () {
  yield takeEvery(actions.FETCH_BOARDS, fetchBoards);
}
