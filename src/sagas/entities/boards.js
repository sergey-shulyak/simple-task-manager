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
    const createdBoard = yield call(api.createBoard, payload);

    yield put(fetchBoards());
    yield put(hideModal(modalNames.EDIT_BOARD));
    yield call(showInfoToast, `Board «${createdBoard.title}» created`);
  } catch (error) {
    yield put(setBoardsError(error.message));
    yield call(showErrorToast, `Failed to create board «${payload.title}»`, error);
  }
}

function* showColumnToast(meta) {
  if (meta.isRemoved) {
    yield put(hideModal(modalNames.DELETE_COLUMN));
    yield call(showInfoToast, `Column «${meta.columnTitle}» removed`);
  } else {
    yield put(hideModal(modalNames.EDIT_COLUMN));
    yield meta.isNew
      ? yield call(showInfoToast, `Column «${meta.columnTitle}» created`)
      : yield call(showInfoToast, `Column «${meta.columnTitle}» updated`);
  }
}

export function* updateBoardSaga({ payload = {}, meta = {} }) {
  try {
    const { updatedBoard } = yield call(api.updateBoard, payload);

    if (meta.onlyColumns) {
      yield put(fetchBoards(payload.id));
      yield* showColumnToast(meta);
    } else {
      yield put(fetchBoards());
      yield put(hideModal(modalNames.EDIT_BOARD));
      yield call(showInfoToast, `Board «${updatedBoard.title}» updated`);
    }
  } catch (error) {
    yield put(setBoardsError(error.message));
    yield call(showErrorToast, `Failed to update board «${payload.title}»`, error);
  }
}

export function* deleteBoardSaga({ payload = {} }) {
  try {
    const { deletedBoard } = yield call(api.deleteBoard, payload);

    yield put(fetchBoards());
    yield put(hideModal(modalNames.DELETE_BOARD));
    yield call(showInfoToast, `Board «${deletedBoard.title}» removed`);
  } catch (error) {
    yield put(setBoardsError(error.message));
    yield call(showErrorToast, 'Failed to remove board', error);
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
