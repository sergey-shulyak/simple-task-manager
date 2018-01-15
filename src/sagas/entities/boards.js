import { all, takeEvery, call, put } from 'redux-saga/effects';

import { getBoard, getBoards, createBoard, deleteBoard, updateBoard } from '../../api/boards';
import { fetchBoards, saveBoardsToStore } from '../../store/actions/boards';
import { hideModal, setBoardsError } from '../../store/actions/ui';

import * as actions from '../../store/actionTypes/boards';
import modalNames from '../../components/modals/modalNames';

export function* fetchBoardsSaga({ payload = {} }) {
  const isFetchingSingleBoard = Boolean(payload.id);

  try {
    const data = isFetchingSingleBoard
      ? yield call(getBoard, payload.id)
      : yield call(getBoards);

    yield put(saveBoardsToStore(data));
  } catch (error) {
    yield put(setBoardsError(error.message));
  }
}

export function* createBoardSaga({ payload = {} }) {
  try {
    yield call(createBoard, payload);

    yield put(hideModal(modalNames.EDIT_BOARD));
    yield put(fetchBoards());
  } catch (error) {
    yield put(setBoardsError(error.message));
  }
}

export function* updateBoardSaga({ payload = {} }) {
  try {
    yield call(updateBoard, payload);

    yield put(hideModal(modalNames.EDIT_BOARD));
    yield put(fetchBoards());
  } catch (error) {
    yield put(setBoardsError(error.message));
  }
}

export function* deleteBoardSaga({ payload = {} }) {
  try {
    yield call(deleteBoard, payload);

    yield put(hideModal(modalNames.DELETE_BOARD));
    yield put(fetchBoards());
  } catch (error) {
    yield put(setBoardsError(error.message));
  }
}

export default function* () {
  yield all([
    takeEvery(actions.FETCH_BOARDS, fetchBoardsSaga),
    takeEvery(actions.CREATE_BOARD, createBoardSaga),
    takeEvery(actions.UPDATE_BOARD, updateBoardSaga),
    takeEvery(actions.DELETE_BOARD, deleteBoardSaga)
  ]);
}
