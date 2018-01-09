import { all, takeEvery, call, put } from 'redux-saga/effects';

import { getBoard, getBoards, createBoard, deleteBoard } from '../../api/boards';
import { fetchBoards, saveBoardsToStore } from '../../store/actions/boards';
import { hideNewBoardModal, hideDeleteBoardModal, setBoardsError } from '../../store/actions/ui';

import * as actions from '../../store/actionTypes/boards';

export function* fetchBoardsSaga({ payload = {} }) {
  const isFetchingSingleBoard = Boolean(payload.id);

  try {
    const data = isFetchingSingleBoard
      ? yield call(getBoard, payload.id)
      : yield call(getBoards);

    yield put(saveBoardsToStore(data));
  } catch (error) {
    yield put(setBoardsError(error));
  }
}

export function* createBoardSaga({ payload = {} }) {
  try {
    yield call(createBoard, payload);

    yield put(hideNewBoardModal());
    yield put(fetchBoards());
  } catch (error) {
    // TODO: Add some toast
    yield put(setBoardsError(error));
  }
}

export function* deleteBoardSaga({ payload = {} }) {
  try {
    console.log(payload);
    yield call(deleteBoard, payload);

    yield put(hideDeleteBoardModal());
    yield put(fetchBoards());
  } catch (error) {
    // TODO: Add some toast
    yield put(setBoardsError(error));
  }
}

export default function* () {
  yield all([
    takeEvery(actions.FETCH_BOARDS, fetchBoardsSaga),
    takeEvery(actions.CREATE_BOARD, createBoardSaga),
    takeEvery(actions.DELETE_BOARD, deleteBoardSaga)
  ]);
}
