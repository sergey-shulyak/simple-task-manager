import { all, takeEvery, call, put } from 'redux-saga/effects';

import * as api from '../../api/boards';
import * as actions from '../../store/actionTypes/boards';

import { fetchBoards, saveBoardsToStore } from '../../store/actions/boards';
import { hideModal, setBoardsError } from '../../store/actions/ui';

import modalNames from '../../components/modals/modalNames';
import { showInfoToast, showErrorToast } from '../utils';

export function* fetchBoardsSaga({ payload = {} }) {
  const isFetchingSingleBoard = Boolean(payload.id);

  try {
    const data = isFetchingSingleBoard
      ? yield call(api.getBoard, payload.id)
      : yield call(api.getBoards);

    yield put(saveBoardsToStore(data));
  } catch (error) {
    yield put(setBoardsError(error.message));
    yield call(showErrorToast, 'Failed to fetch boards', error);
  }
}

export function* createBoardSaga({ payload = {} }) {
  try {
    yield call(api.createBoard, payload);

    yield put(hideModal(modalNames.EDIT_BOARD));
    yield put(fetchBoards());
    yield call(showInfoToast, `Board ${payload.title} created`);
  } catch (error) {
    yield put(setBoardsError(error.message));
    yield call(showErrorToast, `Failed to create board ${payload.title}`, error);
  }
}

export function* updateBoardSaga({ payload = {} }) {
  try {
    yield call(api.updateBoard, payload);

    yield put(hideModal(modalNames.EDIT_BOARD));
    yield put(fetchBoards());
    yield call(showInfoToast, `Board ${payload.title} updated`);
  } catch (error) {
    yield put(setBoardsError(error.message));
    yield call(showErrorToast, `Failed to update board ${payload.title}`, error);
  }
}

export function* deleteBoardSaga({ payload = {} }) {
  try {
    yield call(api.deleteBoard, payload);

    yield put(hideModal(modalNames.DELETE_BOARD));
    yield put(fetchBoards());
    yield call(showInfoToast, 'Board removed');
  } catch (error) {
    yield put(setBoardsError(error.message));
    yield call(showErrorToast, `Failed to remove board ${payload.title}`, error);
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
