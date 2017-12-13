import { takeEvery, call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import isArray from 'lodash/isArray';

import { getBoard, getBoards } from '../api/boards';
import { boardSchema, boardListSchema } from '../store/schema';
import { saveBoardsToStore, saveBoardsError } from '../store/actions/boards';

import * as actions from '../store/actionTypes/boards';

export function* fetchBoards({ payload }) {
  try {
    const boards = payload
      ? yield call(getBoard, payload.id)
      : yield call(getBoards);

    yield isArray(boards)
      ? put(saveBoardsToStore(normalize(boards, boardListSchema)))
      : put(saveBoardsToStore(normalize(boards, boardSchema)));
  } catch (error) {
    yield put(saveBoardsError(error));
  }
}

export default function* () {
  yield takeEvery(actions.FETCH_BOARDS, fetchBoards);
}
